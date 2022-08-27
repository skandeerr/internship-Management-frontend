import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Admin } from './admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient,private route : Router) { }

  login(loginAdmin : Admin){
    return this.httpClient.post<Admin[]>("https://localhost:7056/Admin/login",loginAdmin);
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getId(){
    return localStorage.getItem('id')
  }
  Logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl("admin/login")

 }
 getRole(){
  return localStorage.getItem('roles')
 }
}
