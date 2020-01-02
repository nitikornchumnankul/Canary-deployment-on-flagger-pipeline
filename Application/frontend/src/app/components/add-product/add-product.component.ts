import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name:String;
  img:String;
  description:String;
  Catag:String;
  constructor(
    private authservice: AuthService,
    private router: Router) { }
  ngOnInit() {
  }

  onProductSubmit(){
    const product ={
      name: this.name,
      img : this.img,
      description: this.description,
      Catag: this.Catag
    }

    
    this.authservice.addProduct(product).subscribe(data => {
      if (data.success) {  
          Swal.fire({
            type: 'success',
            title: 'บันทึกไม่สำเร็จ',
            showConfirmButton: false,
            timer: 1300
          })
        this.router.navigate(['/addproduct']);
      } else {
        Swal.fire({
          type: 'error',
          title: 'บันทึกไม่สำเร็จ',
          showConfirmButton: false,
          timer: 1300
        })
        this.router.navigate(['/addproduct']);
      }
    });


    this.name="";
    this.description="";
    this.Catag="";
    this.img="";

  }

}

