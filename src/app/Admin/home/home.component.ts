import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/user/services/auth-user.service';
import { interviews } from '../Services/Interviews/interviews';
import { InterviewsService } from '../Services/Interviews/interviews.service';
import { Project } from '../Services/projects/project';
import { ProjectService } from '../Services/projects/project.service';
import { users } from '../Services/users/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i :any
  length : any
  users : users[] = []
  projects : Project[]=[]
  AllInterview : interviews [] = []
  constructor(private inter : InterviewsService, private auth : AuthUserService,private project : ProjectService,private route : Router,private  user : AuthUserService) { }

  ngOnInit(): void {
    this.getInterview()
  }

  getInterview(){
    this.inter.GetAllInterviews().subscribe({
      next : (data)=>{
        
        this.AllInterview = data
        console.log(this.AllInterview)
        
        for(this.i=0;this.i<this.AllInterview.length;this.i++){
         
          if(this.AllInterview[this.i].validate==1){
            this.project.GetByIdProject(this.AllInterview[this.i].id_proj).subscribe({
              next : (data) =>{
                
                this.projects.unshift(data)
                console.log(this.projects)
              }
            })
            this.user.getUserById(this.AllInterview[this.i].id_user).subscribe({
              next : (data) =>{
                
                this.users.unshift(data)
                console.log(this.users.length)
              }
            })
          }
        }
        if(this.users.length==0){
          this.length= false
      }else{
        this.length=true
      }
        
      }
    })
  }
}
