import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin/admin.service';
import { DetailAdmin } from '../Services/admin/DetailAdmin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  FormAdmin : DetailAdmin = {
    fullName :"",
    email : "",
    password :"",
    tel :""
  }
  errorMessage : string = ""
  constructor(private admin : AdminService, private route : Router) { }

  ngOnInit(): void {
  }
  addAdmin(){
    this.admin.AddAdmin(this.FormAdmin).subscribe({
      next : (data)=>{
        this.route.navigateByUrl("/admin/get")
      },
      error:(error)=>{
        console.log(error);
        this.errorMessage = error.error
      }
    })

  }
}
