import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';
import { RegistreUser } from '../services/RegistreUser';

@Component({
  selector: 'app-registre-user',
  templateUrl: './registre-user.component.html',
  styleUrls: ['./registre-user.component.css']
})
export class RegistreUserComponent implements OnInit {
  RegistreForm : RegistreUser = {
    fullName : '',
    email: '',
    password : '',
    ecole : '',
    tel : '',
    niveau_Specialite :'',
    lienGithub : '',
    lienLinkedln : ''

  }
  responsedata : any;
  errorMessage : string = "";
  constructor(private AuthService : AuthUserService,private router : Router) { 
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  registre(){
    console.log(this.RegistreForm)
    this.AuthService.registre(this.RegistreForm).subscribe({
      next : (data) =>{
        this.responsedata=data;
        console.log(this.responsedata.token)
        localStorage.setItem('token',this.responsedata.token);
        localStorage.setItem('id',this.responsedata.id)
        this.router.navigateByUrl('user/home');
      },
      error:(error)=>{
        this.errorMessage=error.error;
        console.log(error.error);
        console.log(this.RegistreForm)
      }
    
    })
  }
}
