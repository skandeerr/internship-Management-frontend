import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/user/services/auth-user.service';
import { interviews } from '../Services/Interviews/interviews';
import { InterviewsService } from '../Services/Interviews/interviews.service';
import { Project } from '../Services/projects/project';
import { ProjectService } from '../Services/projects/project.service';
import { users } from '../Services/users/users';
declare var window:any;

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {
  i :any
  length : any
  users : users[] = []
  projects : Project[]=[]
  AllInterview : interviews [] = []
  OpenModel: any
  id : any
  result : number =0
  constructor(private inter : InterviewsService,private project : ProjectService,private route : Router,private  user : AuthUserService) { }

  ngOnInit(): void {
    this.getInterview()
    this.OpenModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }



  getInterview(){
    this.inter.GetAllInterviews().subscribe({
      next : (data)=>{
        
        this.AllInterview = data
        console.log(this.AllInterview)
        
        for(this.i=0;this.i<this.AllInterview.length;this.i++){
         
          if(this.AllInterview[this.i].accept == ""){
            this.project.GetByIdProject(this.AllInterview[this.i].id_proj).subscribe({
              next : (data) =>{
                
                this.projects.unshift(data)
                console.log(this.projects)
              }
            })
            this.user.getUserById(this.AllInterview[this.i].id_user).subscribe({
              next : (data) =>{
                
                this.users.unshift(data)
                console.log(this.users)
              }
            })
          
        }
        
      }
      }
    })
  }
  Modal(id : any){
      this.id = id
      this.OpenModel.show();
      console.log(this.result)
  }
  Result(){
    
    if(this.result == 1){
      this.inter.AcceptInter(this.id).subscribe({
        next : (data)=>{
            this.id=0
            
        }
      })
    }else if(this.result == 0){
      this.inter.RefuseInter(this.id).subscribe({
        next : (data)=>{
            this.id=0
            
            
        }
      })
    }
    this.OpenModel.hide();
    window.location.reload();
    console.log(this.result)
  }
 
}
