import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin/admin.service';
import { UsersService } from '../Services/users/users-service.service';
declare var window:any;
@Component({
  selector: 'app-get-all-admin',
  templateUrl: './get-all-admin.component.html',
  styleUrls: ['./get-all-admin.component.css']
})
export class GetAllAdminComponent implements OnInit {
  admins : any
  deleteModel : any;
  idAdmin : any;
  constructor(private admin : AdminService) { }

  ngOnInit(): void {
    this.getAllAdmin();
    this.deleteModel = new window.bootstrap.Modal(
      document.getElementById("ModelDelete")
  );
  }
  getAllAdmin(){
    this.admin.getAllAdmin().subscribe({
      next : (data)=>{
        this.admins=data
      }
    })
  }
  OpenDeleteModel(id:any){
    this.idAdmin = id;
    this.deleteModel.show();
  }
  delete(){
    this.admin.DeleteAdmin(this.idAdmin).subscribe({
      next:(data)=>{
        
        this.idAdmin = 0;
        this.deleteModel.hide();
      }
    })
    window.location.reload();
  }
}
