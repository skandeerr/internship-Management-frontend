import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login/login-service.service';
import { ProfilService } from '../Services/profil/profil.service';
declare var window:any;
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  Admin : any = []
  id : any
  constructor(private profilService : ProfilService, private login :LoginService) { }

  ngOnInit(): void {
    this.id =  this.login.getId();
    this.getAdmin()
  }
  getAdmin(){
    this.profilService.getAdminByid(this.id).subscribe({
      next : (data) =>{
        this.Admin=data
        console.log(this.Admin)
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  update(){
    this.profilService.updateProfil(this.Admin,this.id).subscribe({
      next : (data)=>{
        window.location.reload();

      }
    })
  }
}
