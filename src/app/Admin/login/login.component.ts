import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Services/login/admin';
import { LoginService } from '../Services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : Admin = {
    email :'',
    password : ''
  }
  responsedata : any;
  errorMessage : string = "";
  constructor(private loginService : LoginService, private router : Router) {
    localStorage.clear();

   }

  ngOnInit(): void {
  }

  login(){
    this.errorMessage="";
    this.loginService.login(this.loginForm).subscribe({
      next : (data) =>{
        this.responsedata=data;
        console.log(this.responsedata.token)
        localStorage.setItem('roles',this.responsedata.roles);
        localStorage.setItem('token',this.responsedata.token);
        localStorage.setItem('id',this.responsedata.id);
        if(this.responsedata.roles == "Admin"){
        this.router.navigateByUrl('admin');}else{
          this.router.navigateByUrl('/admin/get')
        }
      },
      error:(error)=>{
        this.errorMessage=error.error;
        console.log(this.loginForm)
        console.log(error);
      }
    })
  
  }
}
