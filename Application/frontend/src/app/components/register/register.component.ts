import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  role:String;

  constructor(private flashMessage:FlashMessagesService,
  
  private authservice:AuthService,
  private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      role: 'users'
    }
    this.authservice.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });


  }
}
