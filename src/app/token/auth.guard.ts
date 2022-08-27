import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Admin/Services/login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService : LoginService, private route:Router){}
  canActivate(){
     if(this.loginService.IsLoggedIn()){
    return true;}
    else{
      this.route.navigateByUrl("admin/login");
      return false;
    }
  }
  
}
