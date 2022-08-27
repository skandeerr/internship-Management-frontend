import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role : any
  constructor(private LoginService : LoginService) { }

  ngOnInit(): void {
    if(this.LoginService.getRole()=="Admin"){
      this.role = true;
    }else {
      this.role=false
    }
  }
  
}
