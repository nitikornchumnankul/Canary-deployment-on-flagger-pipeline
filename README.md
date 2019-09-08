[![Build Status](https://travis-ci.org/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT.svg?branch=master)](https://travis-ci.org/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT)
[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT%2FE-COMMERCE-AND-CANARY-DEPLOYMENT?key=eyJhbGciOiJIUzI1NiJ9.NWQ1ZmRmYzFjNDI1ZjE2ZTY1MzQ2YTY4.gyGUScNe8n81E-DdnhuNQ9S0MGEARcGDuCvzksqy200&type=cf-1)]( https://g.codefresh.io/pipelines/E-COMMERCE-AND-CANARY-DEPLOYMENT/builds?filter=trigger:build~Build;pipeline:5d5fe162645130b671b2a137~E-COMMERCE-AND-CANARY-DEPLOYMENT)
# [E-COMMERCE-AND-CANARY-DEPLOYMENT](https://github.com/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT/wiki)

### สัปดาห์ที่ 1 
    1. ทำหน้า UI ของ E-commerce application version 1 ด้วย MEAN STACK
#### ผลลัพธ์ 
    [x] แสดงรายการสินค้า
### สัปดาห์ที่ 2 
    1. ทำหน้าเพิ่มรายการสินค้าและบันทึกรายการสินค้า
#### ผลลัพธ์
    - แสดง POP UP ว่าบันทึกสำเร็จ
### สัปดาห์ที่ 3 
    1. ทำ Unit test เพื่อทำการทดสอบการเพิ่มและบันทึกสินค้าแบบใส่อักขระพิเศษไม่ได้
    2. สร้างไฟล์ .travis.yml เพื่อรันบน Travis CI
#### ผลลัพธ์
    1. เมื่อทำการทดสอบทั้งหมดจะแสดงคำว่า PASS บน Command line 
    2. แสดงเครื่องหมายถูกต้อง หรือ สัญลักษณ์ที่ แสดงว่า ทำการทดสอบสำเร็จบน Web Site ของ Travis CI
### สัปดาห์ที่ 4 
    1. สร้าง docker images ของ E-commerce application version 1
    2. นำ docker images ที่ สร้างเอาเก็บไว้ใน Docker Registry
    3. สร้างไฟล์ .yml ของ Kubernetes
    4. เชื่อมต่อ The Weave Cloud Agents บน Google Cloud Platform
    5. ทำ Continuous deployment ด้วย Weave Work

### [สัปดาห์ที่ 5 ](https://github.com/nitikornchumnankul/E-COMMERCE-AND-CANARY-DEPLOYMENT/wiki/Flagger-Install-on-GKE-Istio)
    1. ติดตั้ง GKE Cluster บน Google Cloud Platform
    2. ติดตั้ง Cloud DNS บน Google Cloud Platform
    3. ติดตั้ง Helm บน Google Cloud Platform
    4. ติดตั้ง Cert-manager บน Google Cloud Platform
    5. ติดตั้ง Istio Gateway TLS บน Google Cloud Platform
### สัปดาห์ที่ 6 
    1. ทำหน้า UI ของ E-COMMERCE VERSION 2 ด้วย MEAN STACK
#### ผลลัพธ์
    แสดงรายการสินค้าและสามารถเลือกซื้อสินค้าได้
### สัปดาห์ที่ 7 
    1. ทำหน้า UI ยืนยันคำสั่งซื้อ
    2. ทำหน้ารายงานรายการสินค้าและที่สามารถบันทึก ลบ และแก้ไข รายการสินค้า
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
    1.  gitops คืออะไร
    2.  Canary deployment คืออะไร
    3.  devops กับ gitops แตกต่างกันอย่างไร
    4.  ระหว่างการ Deploy แบบ ธรรมดา กับแบบ 
    5.  gitops ช่วยในการแก้ปัญหาจาก ปกติ คืออะไร
    6.  เปรียบเทียบการ Deploy แบบธรรมดา แบบ Devops และ Gitops
    7.  Canary deployment คืออะไร
    8.  ใช้เครื่องมืออะไรบ้าง
    9.  Flagger คืออะไร
    10. Flagger ช่วยฝั่งไหน
    11. ถ้า Config ผิด Error จะเป็นประมาณไหน แล้วแก้อย่างไร
     
    
    
    
### เว็บอ้างอิง
#####    [Travis CI + GitHub Pages - Automated deployment](https://www.youtube.com/watch?v=BFpSD2eoXUk)
#####    [Travis CI - Part 5 Pushin To Dockerhub](https://www.youtube.com/watch?v=YrJyWXYTgzQ)
#####    [NGINX Canary Deployments](https://docs.flagger.app/usage/nginx-progressive-delivery)
#####    [Automated Canary Management to Kubernetes with Flagger, Istio and GitOps Pipelines](https://www.weave.works/blog/automated-canary-management-to-kubernetes-with-flagger-istio-and-gitops-pipelines)
#####    [Tutorial: Hands-on Gitops - Brice Fernandes, Weaveworks](https://www.youtube.com/watch?v=0SFTaAuOzsI)
#####    [Weaveworks Documentation](https://www.weave.works/docs/)
#####    [GitOps](https://www.weave.works/technologies/gitops/)
#####    [Continuous Delivery the Hard Way with Kuberenetes](https://www.youtube.com/watch?v=6PPgZXuDY_U)
 
