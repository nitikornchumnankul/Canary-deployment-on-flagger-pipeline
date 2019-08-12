import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {Routes, RouterModule} from "@angular/router";
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes:Routes =[
  { 
    path:'',
    component: HomeComponent
  },
  {
     path:'register',
     component: RegisterComponent
    },
  { 
    path:'addproduct', 
    component: AddProductComponent
  },
  {
    path:'login',
    component:LoginComponent  
  }
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AddProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
