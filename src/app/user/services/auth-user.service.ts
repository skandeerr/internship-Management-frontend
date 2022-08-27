import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from './LoginUser';
import { RegistreUser } from './RegistreUser';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private httpClient : HttpClient, private route : Router) { }

  registre(user : RegistreUser){
    return this.httpClient.post<RegistreUser>("https://localhost:7056/user/registre",user)
  }
  login(loginUser : LoginUser){
    return this.httpClient.post<LoginUser>("https://localhost:7056/user/login",loginUser)
  }
  getUserById(id : any){
    return this.httpClient.get<any>(`https://localhost:7056/user/${id}`)
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
    
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getId(){
    return localStorage.getItem('id');
  }
  Logout(){
     localStorage.removeItem('token');
     this.route.navigateByUrl("user/home")

  }

}
