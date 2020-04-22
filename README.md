[![Build Status](https://travis-ci.org/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT.svg?branch=master)](https://travis-ci.org/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT)
[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT%2FE-COMMERCE-AND-CANARY-DEPLOYMENT?key=eyJhbGciOiJIUzI1NiJ9.NWQ1ZmRmYzFjNDI1ZjE2ZTY1MzQ2YTY4.gyGUScNe8n81E-DdnhuNQ9S0MGEARcGDuCvzksqy200&type=cf-1)]( https://g.codefresh.io/pipelines/E-COMMERCE-AND-CANARY-DEPLOYMENT/builds?filter=trigger:build~Build;pipeline:5d5fe162645130b671b2a137~E-COMMERCE-AND-CANARY-DEPLOYMENT)
# [Canary-deployment-on-flagger-pipeline](https://github.com/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT/wiki)

##ยังอยู่ในขั้นตอนพัฒนายังไม่เสร็จสิ้น
### เนื้อหาที่เกี่ยวข้อง
- [ ] Tdd development
- [ ] 12 factor application principles
- [ ] Microservice Model
- [ ] Service Mesh Model
- [ ] Domain name
- [ ] CI CD
- [ ] [GITOPS](https://docs.google.com/presentation/d/1ujRd4k2s8dG0-AMHIWMTyA8JoTUkXRQwXQ4izmDWeTI/edit#slide=id.g1e8a60acf8_0_8)
- [ ] Deployment strategy(Canary,A/B Testing,Blue/Green)
- [ ] Docker
- [ ] Kubernetes
- [ ] Helm
- [ ] Istio
- [ ] Flux
- [ ] [Flagger](https://docs.google.com/presentation/d/1NBMhY9TUzh4I830KIzy1n0dfU_rul2sPdSOHRhyLyK4/edit#slide=id.g8292fad430_0_12)

[เนื้อหาส่วนให้อ้างอิงจาก](https://www.slideshare.net/weaveworks/kubecon-seattle-2018-workshop-slides)
### The Canary-deployment-on-flagger-pipeline Project is not finished. 

### สัปดาห์ที่ 1 
1. ทำหน้า UI ของ E-commerce application version 1 ด้วย MEAN STACK
#### ผลลัพธ์ 
- [x] แสดงรายการสินค้า
#### ปัญหาที่พบ
- [ ] ยังมี hardcode ของรูปภาพอยู่
### สัปดาห์ที่ 2 
    1. ทำหน้าเพิ่มรายการสินค้าและบันทึกรายการสินค้า
#### ผลลัพธ์
- [x] แสดง POP UP ว่าบันทึกสำเร็จ
### สัปดาห์ที่ 3 
    1. ทำ Unit test เพื่อทำการทดสอบการเพิ่มและบันทึกสินค้าแบบใส่อักขระพิเศษไม่ได้
    2. สร้างไฟล์ .travis.yml เพื่อรันบน Travis CI
#### ผลลัพธ์
- [x] เมื่อทำการทดสอบทั้งหมดจะแสดงคำว่า PASS บน Command line 
- [x] แสดงเครื่องหมายถูกต้อง หรือ สัญลักษณ์ที่ แสดงว่า ทำการทดสอบสำเร็จบน Web Site ของ Travis CI
### สัปดาห์ที่ 4 
- [x] สร้าง docker images ของ E-commerce application version 1
- [x] นำ docker images ที่ สร้างเอาเก็บไว้ใน Docker Registry
- [ ]  สร้างไฟล์ .yml ของ Kubernetes
- [x] เชื่อมต่อ The Weave Cloud Agents บน Google Cloud Platform
- [ ] ทำ Continuous deployment ด้วย Weave Work

### [สัปดาห์ที่ 5 ](https://github.com/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT/wiki/Flagger-Install-on-GKE-Istio)
- [x] ติดตั้ง GKE Cluster บน Google Cloud Platform
- [x] ติดตั้ง Cloud DNS บน Google Cloud Platform
- [x] ติดตั้ง Helm บน Google Cloud Platform
- [x] ติดตั้ง Cert-manager บน Google Cloud Platform
- [x] ติดตั้ง Istio Gateway TLS บน Google Cloud Platform
#### ปัญหาที่พบ
- [ ] ไม่เข้าใจหลักการทำงานของ Cloud DNS ว่ามการเซ็ต ค่าการเข้าออกอย่างไร
- [ ] ยังไม่เข้าใจ helm เวลาติดตั้ง Package ต่างๆ หรือ Update 
- [ ] Cert-manager ใช้อย่างไร มันทำงานอย่างไร
- [ ] หลักกการของ Istio Gateaway TLS ควบคุมอย่างไร
### สัปดาห์ที่ 6 
    1. ทำหน้า UI ของ E-COMMERCE VERSION 2 ด้วย MEAN STACK
#### ผลลัพธ์
- [x]  แสดงรายการสินค้าและสามารถเลือกซื้อสินค้าได้
### สัปดาห์ที่ 7 
- [ ] ทำหน้า UI ยืนยันคำสั่งซื้อ
- [ ] ทำหน้ารายงานรายการสินค้าและที่สามารถบันทึก ลบ และแก้ไข รายการสินค้า
### สิ่งที่ไม่เข้าใจในสัปดาห์น้คือ
- [ ] วิธีการ Push และ Get
#### ผลลัพธ์
    1. แสดงสถานะของผู้สั่งซื้อ
    2. ถ้าบันทึก แสดง  POP UP ว่าบันทึกสำเร็จ
       ถ้าลบ   แสดง  POP UP ว่าลบสำเร็จ 
### สัปดาห์ที่ 8  
    1. ทำ Unit test เพื่อทำการทดสอบการเพิ่มและบันทึกสินค้าแบบใส่อักขระพิเศษไม่ได้ กรณีที่ผ่านไม่ผ่าน
    2. สร้างไฟล์ .travis.yml เพื่อรันบน Travis CI
    3. สร้าง docker images ของ E-commerce application version 1
    4. นำ docker images ที่ สร้างเอาเก็บไว้ใน Docker Registry
    5. สร้างไฟล์ .yml ของ Kubernetes
    6. เชื่อมต่อ The Weave Cloud Agents บน Google Cloud Platform
    7. ทำ Continuous deployment ด้วย Weave Work
  
### สัปดาห์ที่ 9 
    1. ศึกษาการทำ Automated canary promotion จาก Tutorial
#### ผลลัพธ์
    Service ที่ทำการทดสอบจะลด version 1 ไปทีละ 5 และเพิ่ม version 2 ไปทีละ 5
### สัปดาห์ที่ 10
    1. ทำ  Automated canary promotion โดยใช้ images ของ E-commerce version 1 และ E-commerce version 2
#### ผลลัพธ์
    E-commerce version 1 จะค่อยๆลดจำนวน service ลง แล้ว E-commerce version 2 จะค่อยเพิ่มขึ้น
### สัปดาห์ที่ 11
    1. ศึกษาข้อมูลการเขียนรายงาน
    2. ศึกษาการเขียนงอ้างอิงรายงาน
### สัปดาห์ที่ 12
    1. ทำรายงาน ปรับแต่งให้สวยงาม ตรวจสอบรายงาน
    2. ส่งรายงานอาจารย์
### เนื้อหาในโครงงาน
- [ ]  gitops คืออะไร operation by pull request เป็นการจัดการ operation ด้วย git  ความต้องการ resource หรือ อะไรต่างๆ ที่ต้องจัดการด้วย kubeclt หรือ helm upgrade เปลี่ยนมาเป็นการจัดการ ผ่าน source code
- [ ]  Canary deployment คืออะไร
- [ ]  devops กับ gitops แตกต่างกันอย่างไร
        GitOps is a set of practices
        Devops is a culture
- [ ]  ระหว่างการ Deploy แบบ ธรรมดา กับแบบ 
- [ ]  gitops ช่วยในการแก้ปัญหาจาก ปกติ คืออะไร
- [ ]  เปรียบเทียบการ Deploy แบบธรรมดา แบบ Devops และ Gitops
- [ ]  Canary deployment คืออะไร กลยุทธ์ ในการทำ deployment โดยจะเป็น รูปแบบ ค่อยๆ update version ตามน้ำหนักที่กำหนดไว้
- [ ]  ใช้เครื่องมืออะไรบ้าง
- [ ]  Flagger คืออะไร operations for kubernetes คอยส่งเหตุการณ์ต่างๆที่เกิดขึ้นบน kubernetes โดยผ่าน webhook ของ slack เป็นข้อความ 
- [ ] Flagger ช่วยฝั่งไหน
- [ ] ถ้า Config ผิด Error จะเป็นประมาณไหน แล้วแก้อย่างไร
     
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
 
