import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  product: any;
  oldproduct: any;
  role: any;
  iteml: any;
  totall: any;

  
  constructor(private http:Http) { }
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
      .map(res => res.json());

    // return this.http.post('http://192.168.99.100:8080/users/register', user, { headers: headers })
    // .map(res => res.json());
  };

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
      .map(res => res.json());

      // return this.http.post('http://192.168.99.100:8080/users/authenticate', user, { headers: headers })
      // .map(res => res.json());
  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  loggedIn(){
    return tokenNotExpired('id_token');
  }
  getUser(){
    return this.user;
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', user.role);
    this.authToken = token;
    this.user = user;
    this.role = user.role;
  }
  addProduct(product) {
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/addproduct', product, { headers: headers })
      .map(res => res.json());

      // return this.http.post('http://192.168.99.100:8080/users/addproduct', product, { headers: headers })
      // .map(res => res.json());
  }
  getProducts() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.get('users/product', { headers: headers })
      .map(res => res.json());
  }
  storeItemToOrder(item: any) {

    var tempItem = JSON.parse(localStorage.getItem("items"));
    if (tempItem == null) tempItem = [];
    localStorage.setItem("item", JSON.stringify(item));
    tempItem.push(item);
    localStorage.setItem("items", JSON.stringify(tempItem));

  }
  deleteProduct(productID) {
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:8080/users/deleteproduct/' + productID, { headers: headers })
      .map(res => res.json());
  }

  userRole() {
    const role = localStorage.getItem('role');
    if (role == 'admin')
      return true;
    else
      return false;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  updateItemsInOrder(items: any) {
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
  }
  getOrderFromItems() {
    return this.iteml = JSON.parse(localStorage.getItem("items"));
  }
  orderClear() {
    localStorage.removeItem("items");
    localStorage.removeItem("item");
  }
  storeTotal(total: any) {
    this.totall = total;
  }

  storeProductData(product1: any) {
    this.oldproduct = product1;

  }
}
