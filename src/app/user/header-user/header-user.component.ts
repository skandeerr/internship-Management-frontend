import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  Active  : any;
  route = ""
  constructor(private AuthService : AuthUserService) { }

  ngOnInit(): void {
    if(this.AuthService.IsLoggedIn()==true){
      this.Active=true;
      this.route = "user/profile"
    }else {
      this.Active=false
      this.route = "/user/login"
    }
    console.log(this.Active)
  }
  logout(){
    this.AuthService.Logout()
    this.Active=false
  }

}
