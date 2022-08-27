import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../services/LoginUser';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  LoginUser : LoginUser ={
    email : '',
    password : ''
  }
  responsedata : any;
  errorMessage : string = "";
  constructor(private AuthService : AuthUserService,private router : Router) { 
    localStorage.clear();

  }

  ngOnInit(): void {
  }
  Login(){
    this.AuthService.login(this.LoginUser).subscribe({
      next : (data) =>{
        this.responsedata=data;
        console.log(this.responsedata.token)
        localStorage.setItem('token',this.responsedata.token);
        localStorage.setItem('id',this.responsedata.id)
        this.router.navigateByUrl('user/home');
      },
      error:(error)=>{
        this.errorMessage=error.error;
        console.log(error);
      }
    })
  }
}
