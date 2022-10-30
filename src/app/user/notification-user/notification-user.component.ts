import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interviews } from 'src/app/Admin/Services/Interviews/interviews';
import { InterviewsService } from 'src/app/Admin/Services/Interviews/interviews.service';
import { Project } from 'src/app/Admin/Services/projects/project';
import { ProjectService } from 'src/app/Admin/Services/projects/project.service';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-notification-user',
  templateUrl: './notification-user.component.html',
  styleUrls: ['./notification-user.component.css']
})
export class NotificationUserComponent implements OnInit {
  id : any
  AllInterview : interviews [] = []
  i :any
  length : any
  projects : Project[] = []
  interview : interviews [] = []
  constructor(private inter : InterviewsService, private auth : AuthUserService,private project : ProjectService,private route : Router) { }

  ngOnInit(): void {
    this.id = this.auth.getId()
    this.getInterview()
    console.log(this.id)
  }

  getInterview(){
    this.inter.GetAllInterviews().subscribe({
      next : (data)=>{
        
        this.AllInterview = data
        console.log(this.AllInterview)
        
        for(this.i=0;this.i<this.AllInterview.length;this.i++){
         console.log( this.AllInterview[this.i].date_entretien)
          if(this.AllInterview[this.i].id_user==this.id && this.AllInterview[this.i].validate==0){
            console.log("aaaaaaaaaa")
              this.interview.unshift(this.AllInterview[this.i])
          }
        }
        for(this.i=0;this.i<this.AllInterview.length;this.i++){
          this.project.GetByIdProject(this.AllInterview[this.i].id_proj).subscribe({
            next : (data)=>{
                this.projects.unshift(data)
                console.log(this.projects)
            }
          })
        }
        if(this.interview.length==0){
            this.length= false
        }else{
          this.length=true
        }
      }
    })
  }

  confirm(id:any){
    this.inter.validateInterview(id).subscribe({
      next : (data)=>{
          this.route.navigateByUrl("user/home")
      }
    })
  }
}
