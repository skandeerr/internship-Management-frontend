import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Project } from 'src/app/Admin/Services/projects/project';
import { ProjectService } from 'src/app/Admin/Services/projects/project.service';
import { AuthUserService } from '../services/auth-user.service';
declare var window:any;
@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
  id : any;
  project : any = [];
  Model :any;
  visible : any
  constructor(private route : ActivatedRoute,private ProjectService : ProjectService,private AuthService : AuthUserService,private router :Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getProjectById()
    this.Model = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.ButtonVisibleOrNot()
    console.log(this.AuthService.getId())
  }
  ButtonVisibleOrNot(){
    if(this.AuthService.IsLoggedIn()){
    this.AuthService.getUserById(this.AuthService.getId()).subscribe({
      next:(data)=>{
        console.log(data.validate)
        if(data.validate==0){
          this.visible="disabled"
        }else{
          this.visible=""
        }
      }
    })
  }}
getProjectById(){
  this.ProjectService.GetByIdProject(this.id).subscribe({
    next :(data)=>{
      this.project=data;
      console.log(this.project)
    },
    error:(error)=>{
      console.log(error);
    }
  })
  }

  OpenAddOrUpdate(){
    if(!this.AuthService.IsLoggedIn()){
      this.router.navigateByUrl("user/login")
    }else{
      this.Model.show();}
  }
}

