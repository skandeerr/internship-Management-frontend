import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Project } from 'src/app/Admin/Services/projects/project';
import { ProjectService } from 'src/app/Admin/Services/projects/project.service';
import { AuthUserService } from '../services/auth-user.service';
import { PostProject } from '../services/postproj/PostProj';
import { PostprojService } from '../services/postproj/postproj.service';
declare var window:any;
@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
  idP : any;
  project : any = [];
  Model :any;
  visible : any;
  FormPost : PostProject = {
    id : null,
    id_proj : null,
    id_user : null,
    cv : "",
    description : ""
  }
  idU : any
  constructor(private route : ActivatedRoute,private ProjectService : ProjectService,private AuthService : AuthUserService,private router :Router,private postproj : PostprojService) { }

  ngOnInit(): void {
    this.idP = this.route.snapshot.params['id'];
    this.idU = this.AuthService.getId()
    this.FormPost.id_proj=this.idP
    this.FormPost.id_user=this.idU
    this.getProjectById()
    this.Model = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.ButtonVisibleOrNot()
   
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
  this.ProjectService.GetByIdProject(this.idP).subscribe({
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

  post(){
    delete this.FormPost['id'];
      this.postproj.PostProject(this.FormPost).subscribe({
        next : (data) =>{
          console.log(data)
          this.Model.hide();

        },
        error : (error) =>{
          console.log(this.FormPost)
          console.log(error);
        }
      })
  }
  
}

