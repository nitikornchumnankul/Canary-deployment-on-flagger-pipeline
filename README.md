[![Build Status](https://travis-ci.org/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT.svg?branch=master)](https://travis-ci.org/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT)
[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT%2FE-COMMERCE-AND-CANARY-DEPLOYMENT?key=eyJhbGciOiJIUzI1NiJ9.NWQ1ZmRmYzFjNDI1ZjE2ZTY1MzQ2YTY4.gyGUScNe8n81E-DdnhuNQ9S0MGEARcGDuCvzksqy200&type=cf-1)]( https://g.codefresh.io/pipelines/E-COMMERCE-AND-CANARY-DEPLOYMENT/builds?filter=trigger:build~Build;pipeline:5d5fe162645130b671b2a137~E-COMMERCE-AND-CANARY-DEPLOYMENT)
# [Canary-deployment-on-flagger-pipeline](https://github.com/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT/wiki)

[เนื้อหาส่วนให้อ้างอิงจาก](https://www.slideshare.net/weaveworks/kubecon-seattle-2018-workshop-slides)
### The Canary-deployment-on-flagger-pipeline Project is not finished. 

[Presentation](https://docs.google.com/presentation/d/1B8YrBI604nMdOZBy1lQ0T6qDTfD66PqnIK3QxdP-khA/edit?usp=sharing)
     
 ติดตั้ง Weave Scope
 
 ``kubectl create clusterrolebinding "cluster-admin-$(whoami)" --clusterrole=cluster-admin --user="$(gcloud config get-value core/account)"``
 
 ``kubectl apply -f "https://cloud.weave.works/k8s/scope.yaml?k8s-version=$(kubectl version | base64 | tr -d '\n')"``

    forward port
    
    ``kubectl port-forward -n weave "$(kubectl get -n weave pod --selector=weave-scope-component=app -o jsonpath='{.items..metadata.name}')" 4040``

[INSTALL WEAVE SCOPE](https://www.weave.works/docs/scope/latest/installing/#docker-single-node)
    
### เว็บอ้างอิง
#####    [Flagger](https://flagger.app/)
#####    [Travis CI + GitHub Pages - Automated deployment](https://www.youtube.com/watch?v=BFpSD2eoXUk)
#####    [Travis CI - Part 5 Pushin To Dockerhub](https://www.youtube.com/watch?v=YrJyWXYTgzQ)
#####    [NGINX Canary Deployments](https://docs.flagger.app/usage/nginx-progressive-delivery)
#####    [Automated Canary Management to Kubernetes with Flagger, Istio and GitOps Pipelines](https://www.weave.works/blog/automated-canary-management-to-kubernetes-with-flagger-istio-and-gitops-pipelines)
#####    [Tutorial: Hands-on Gitops - Brice Fernandes, Weaveworks](https://www.youtube.com/watch?v=0SFTaAuOzsI)
#####    [Weaveworks Documentation](https://www.weave.works/docs/)
#####    [GitOps](https://www.weave.works/technologies/gitops/)
#####    [Continuous Delivery the Hard Way with Kuberenetes](https://www.youtube.com/watch?v=6PPgZXuDY_U)
#####    [POWERPOINT TEMPLATE](https://pptmon.com/category/templates/design-idea/)

[istioGKE]("https://gist.github.com/lucasponce/ac4de4ad5a2994ec7e5a291746db4c28.js")
 
