import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/user/services/auth-user.service';
import { PostProject } from 'src/app/user/services/postproj/PostProj';
import { PostprojService } from 'src/app/user/services/postproj/postproj.service';
import { Project } from '../Services/projects/project';
import { ProjectService } from '../Services/projects/project.service';
import { users } from '../Services/users/users';
@Component({
  selector: 'app-projet-postuler',
  templateUrl: './projet-postuler.component.html',
  styleUrls: ['./projet-postuler.component.css']
})
export class ProjetPostulerComponent implements OnInit {
  AllPost : PostProject[] = []
  i : number = 0
  users : users[] = []
  projects : Project[]=[]
 
  constructor(private post : PostprojService, private user : AuthUserService,private project :ProjectService,private route : Router) { }

  ngOnInit(): void {
    this.GetAllPost()
    
  }
  GetAllPost(){
    this.post.GetPostProject().subscribe({
      next: (data)=>{
        this.AllPost=data;
        console.log(this.AllPost)
        for(this.i=0;this.i<this.AllPost.length;this.i++){
          
          this.user.getUserById(this.AllPost[this.i].id_user).subscribe({
            next : (data) =>{
              
              this.users.unshift(data)
              console.log(this.users.length)
            }
          })
        }
        for(this.i=0;this.i<this.AllPost.length;this.i++){
          this.project.GetByIdProject(this.AllPost[this.i].id_proj).subscribe({
            next : (data) =>{
              
              this.projects.unshift(data)
              console.log(this.projects)
            }
          })
        }
      },error:(error)=>{
        console.log(error)
      }
      
    })
    
    
    }
  
    detail(id:any){
      console.log(id)
      this.route.navigateByUrl("/admin/post/detail/"+id)
    }

}
