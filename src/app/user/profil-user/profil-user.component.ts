import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { RegistreUser } from '../services/RegistreUser';
import { UpdateProfil } from '../services/UpdateProfil';
declare var window:any;
@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
  
  id : any
  User : any = [];
  
  constructor(private authService : AuthUserService) { }

  ngOnInit(): void {
    
    this.id = this.authService.getId();
    this.getUserDeatils()
    console.log(this.id)
   
  }
  getUserDeatils(){
    this.authService.getUserById(this.id).subscribe({
      next :(data)=>{
        this.User=data;
        console.log(this.User)
      },
      error:(error)=>{
        console.log(error);
      }
    
    })
  }

  update(){
    this.authService.UpdateProfil(this.User,this.id).subscribe({
      next : (data)=>{
        
        window.location.reload();

      }
    })
  }
}
