import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Admin/Services/projects/project';
import { ProjectService } from 'src/app/Admin/Services/projects/project.service';

@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {
  project : Project[] = [];
  constructor(private ProjectService : ProjectService,private route :Router) { }

  ngOnInit(): void {
    this.getProject()
  }

  getProject(){
    this.ProjectService.GetAllProject().subscribe({
      next :(data)=>{
        this.project=data;
        console.log(data)
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  detail(id:any){
    
    this.route.navigateByUrl("user/home/detail/"+id)
  }
  
}
