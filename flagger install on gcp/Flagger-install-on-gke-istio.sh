# !/bin/bash
# gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project black-anagram-259815
# ENV
gcloud config set project ${PROJECT_ID}

# Set the default compute region and zone:
gcloud config set compute/region ${compute_region}
gcloud config set compute/zone ${compute_zone}


# Enable the Kubernetes and Cloud DNS services for your project:
gcloud services enable container.googleapis.com
gcloud services enable dns.googleapis.com


# Install the kubectl command-line tool:
gcloud components install kubectl

# GKE cluster setup
# Create a cluster with the Istio add-on:
K8S_VERSION=$(gcloud container get-server-config --format=json \
| jq -r '.validMasterVersions[0]')

gcloud beta container clusters create istio \
--cluster-version=${K8S_VERSION} \
--zone=us-central1-a \
--num-nodes=2 \
--machine-type=n1-highcpu-4 \
--preemptible \
--no-enable-cloud-logging \
--no-enable-cloud-monitoring \
--disk-size=30 \
--enable-autorepair \
--addons=HorizontalPodAutoscaling,Istio \
--istio-config=auth=MTLS_PERMISSIVE

# The above command will create a default node pool consisting of two n1-highcpu-4 
# (vCPU: 4, RAM 3.60GB, DISK: 30GB) preemptible VMs. 
# Preemptible VMs are up to 80% cheaper than regular instances and are terminated and replaced after a maximum of 24 hours.

# Set up credentials for kubectl:

gcloud container clusters get-credentials istio

# Create a cluster admin role binding:
kubectl create clusterrolebinding "cluster-admin-$(whoami)" \
--clusterrole=cluster-admin \
--user="$(gcloud config get-value core/account)"

# Validate your setup with:

kubectl -n istio-system get svc

# In a couple of seconds GCP should allocate an external IP to the istio-ingressgateway service.


# Cloud DNS setup
# You will need an internet domain and access to the registrar to change the name servers to Google Cloud DNS.
# Create a managed zone named istio in Cloud DNS (replace example.com with your domain):
gcloud dns managed-zones create \
--dns-name=${dns_name} \
--description="Istio zone" "istio"


# Create a static IP address named istio-gateway using the Istio ingress IP:

export GATEWAY_IP=$(kubectl -n istio-system get svc/istio-ingressgateway -ojson \
| jq -r .status.loadBalancer.ingress[0].ip)

gcloud compute addresses create istio-gateway --addresses ${GATEWAY_IP} --region ${compute_region}


# Create the following DNS records 

gcloud dns record-sets transaction start --zone=istio

gcloud dns record-sets transaction add --zone=istio \
--name="${DOMAIN}" --ttl=300 --type=A ${GATEWAY_IP}

gcloud dns record-sets transaction add --zone=istio \
--name="www.${DOMAIN}" --ttl=300 --type=A ${GATEWAY_IP}

gcloud dns record-sets transaction add --zone=istio \
--name="*.${DOMAIN}" --ttl=300 --type=A ${GATEWAY_IP}

gcloud dns record-sets transaction execute --zone istio

# Install Helm
# Create a service account and a cluster role binding for Tiller:

kubectl -n kube-system create sa tiller

kubectl create clusterrolebinding tiller-cluster-rule \
--clusterrole=cluster-admin \
--serviceaccount=kube-system:tiller

# Deploy Tiller in the kube-system namespace:

helm init --service-account tiller


# Install cert-manager
# Jetstack's cert-manager is a Kubernetes operator that automatically creates and manages TLS certs issued by Let’s Encrypt.
# You'll be using cert-manager to provision a wildcard certificate for the Istio ingress gateway.
# Install cert-manager's CRDs:
CERT_REPO=https://raw.githubusercontent.com/jetstack/cert-manager

kubectl apply -f ${CERT_REPO}/release-0.10/deploy/manifests/00-crds.yaml

# Create the cert-manager namespace and disable resource validation:
kubectl create namespace cert-manager

kubectl label namespace cert-manager certmanager.k8s.io/disable-validation=true

# Install cert-manager with Helm:

helm repo add jetstack https://charts.jetstack.io && \
helm repo update && \
helm upgrade -i cert-manager \
--namespace cert-manager \
--version v0.10.0 \
jetstack/cert-manager

# Istio Gateway TLS setup
# Create a generic Istio Gateway to expose services outside the mesh on HTTPS:
REPO=https://raw.githubusercontent.com/weaveworks/flagger/master

kubectl apply -f ${REPO}/artifacts/gke/istio-gateway.yaml

# Create a service account with Cloud DNS admin role (replace my-gcp-project with your project ID)

gcloud iam service-accounts create dns-admin \
--display-name=dns-admin \
--project=${GCP_PROJECT}

gcloud iam service-accounts keys create ./gcp-dns-admin.json \
--iam-account=dns-admin@${GCP_PROJECT}.iam.gserviceaccount.com \
--project=${GCP_PROJECT}

gcloud projects add-iam-policy-binding ${GCP_PROJECT} \
--member=serviceAccount:dns-admin@${GCP_PROJECT}.iam.gserviceaccount.com \
--role=roles/dns.admin

# Create a Kubernetes secret with the GCP Cloud DNS admin key:
kubectl create secret generic cert-manager-credentials \
--from-file=./gcp-dns-admin.json \
--namespace=istio-system

# Create a letsencrypt issuer for CloudDNS 

kubectl apply -f ./letsencrypt-issuer.yaml

# Create a wildcard certificate (replace example.com with your domain):
kubectl apply -f ./istio-gateway-cert.yaml

# In a couple of seconds cert-manager should fetch a wildcard certificate from letsencrypt.org:
kubectl -n istio-system describe certificate istio-gateway

# Recreate Istio ingress gateway pods:

kubectl -n istio-system get pods -l istio=ingressgateway

# Note that Istio gateway doesn't reload the certificates from the TLS secret on cert-manager renewal. 
# Since the GKE cluster is made out of preemptible VMs the gateway pods will be replaced once every 24h, 
# if your not using preemptible nodes then you need to manually delete the gateway pods every two months before the certificate expires.


# Install Prometheus
# The GKE Istio add-on does not include a Prometheus instance that scrapes the Istio telemetry service. 
# Because Flagger uses the Istio HTTP metrics to run the canary analysis you have to deploy the following Prometheus configuration 
# that's similar to the one that comes with the official Istio Helm chart.
# Find the GKE Istio version with:'

kubectl -n istio-system get deploy istio-pilot -oyaml | grep image:

# Install Prometheus in istio-system namespace:
kubectl -n istio-system apply -f \
https://storage.googleapis.com/gke-release/istio/release/1.0.6-gke.3/patches/install-prometheus.yaml

# Install Flagger and Grafana
# Add Flagger Helm repository:
helm repo add flagger https://flagger.app

# Install Flagger's Canary CRD:
kubectl apply -f https://raw.githubusercontent.com/weaveworks/flagger/master/artifacts/flagger/crd.yaml

# Deploy Flagger in the istio-system namespace with Slack notifications enabled:
helm upgrade -i flagger flagger/flagger \
--namespace=istio-system \
--set crd.create=false \
--set metricsServer=http://prometheus.istio-system:9090 \
--set slack.url=${slack_webhook}\
--set slack.channel=${slack_channel} \
--set slack.user=${slack_user}

# Deploy Grafana in the istio-system namespace:
helm upgrade -i flagger-grafana flagger/grafana \
--namespace=istio-system \
--set url=http://prometheus.istio-system:9090 \
--set user=${grafana_user} \
--set password=${grafana_password} 

# Expose Grafana through the public gateway by creating a virtual service (replace example.com with your domain):

kubectl apply -f ./grafana-virtual-service.yaml

# Navigate to http://grafana.example.com in your browser and you should be redirected to the HTTPS version.