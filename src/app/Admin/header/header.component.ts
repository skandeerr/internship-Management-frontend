import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role : any
  constructor(private LoginService : LoginService) { }

  ngOnInit(): void {
    if(this.LoginService.getRole()=="Admin"){
      this.role = true;
    }else {
      this.role=false
    }
  }
  logout(){
    this.LoginService.Logout()
    
  }
}
