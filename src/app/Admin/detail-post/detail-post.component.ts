import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthUserService } from 'src/app/user/services/auth-user.service';
import { PostProject } from 'src/app/user/services/postproj/PostProj';
import { PostprojService } from 'src/app/user/services/postproj/postproj.service';
import { interviews } from '../Services/Interviews/interviews';
import { InterviewsService } from '../Services/Interviews/interviews.service';
import { Project } from '../Services/projects/project';
import { ProjectService } from '../Services/projects/project.service';
import { users } from '../Services/users/users';
declare var window:any;
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  idP : any
  deleteModel : any;
  Post :any = []
  i : number = 0
  users : users[] = []
  projects : Project[]=[]
  ModelInterviews :any;
  Interview : interviews = {
    id : null,
    date_entretien : null,
    id_user : null,
    id_proj: null,
    validate : 0,
    accept : ""
  }
  constructor(private post : PostprojService, private user : AuthUserService,private project :ProjectService,private route : ActivatedRoute,private router : Router,private inter : InterviewsService) { }

  ngOnInit(): void {
    this.idP = this.route.snapshot.params['id'];
    console.log(this.idP)
    this.GetPostById()
    this.deleteModel = new window.bootstrap.Modal(
      document.getElementById("ModelDelete")
  );
  this.ModelInterviews = new window.bootstrap.Modal(
    document.getElementById("exampleModal")
  );
  
  console.log(this.Interview)
  
  }



  GetPostById(){
    console.log("rddddddddddddd")
    this.post.GetPostById(this.idP).subscribe({
      next: (data)=>{
       
        this.Post=data
        console.log(this.Post)
        this.Interview.id_proj = this.Post.id_proj
        this.Interview.id_user = this.Post.id_user
          
          
          this.user.getUserById(this.Post.id_user).subscribe({
            next : (data) =>{
              
              this.users.unshift(data)
              console.log(this.users)
            }
          })
        
    
          this.project.GetByIdProject(this.Post.id_proj).subscribe({
            next : (data) =>{
              
              this.projects.unshift(data)
              console.log(this.projects)
            }
          })
        
      },error:(error)=>{
        console.log(error)
        console.log(error,"rddddddddddddd")
      }
      
    })
    
    }

    OpenDeleteModel(){
      
      this.deleteModel.show();
    }

    delete(){
      this.post.deletePost(this.idP).subscribe({
        next : (data) => {

        }
      })
      this.deleteModel.hide()
      this.router.navigateByUrl("/admin/projects/postulate")
      
    }

    OpenModal(){
      this.ModelInterviews.show()
    }
    PostInter(){
      delete this.Interview['id'];
      this.inter.PostInterview(this.Interview).subscribe({
        next : (data) =>{
          
        }
      })
      this.ModelInterviews.hide()
      this.router.navigateByUrl("/admin/interviews")
    }
}
