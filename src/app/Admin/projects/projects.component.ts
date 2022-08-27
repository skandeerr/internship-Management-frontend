import { Component, OnInit,Input  } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Project } from '../Services/projects/project';
import { ProjectService } from '../Services/projects/project.service';
declare var window:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project : Project[] = [];
  ModelTitle : string = '';
  x:any[]=[];
  RemoveProject : any = 0;
  deleteModel : any;
  addProject : Project = {
   // id : Guid.createEmpty(),
   id:null,
    refe : '',
    nom : '',
    description : '',
    technologies : '',
    type : '',
    periode : 0,
    numberInter : 0
    
  }
  addOrUpdateModel :any;

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getAllProject();
    this.addOrUpdateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.deleteModel = new window.bootstrap.Modal(
      document.getElementById("ModelDelete")
  );
    console.log(this.addProject.id)
  }
  OpenAddOrUpdate(id : any){
    if(id===0){
      this.ModelTitle = "Add project";
      
      }
      else {
        this.ModelTitle="Update project"
        console.log(id)
       
        this.addProject=this.project.filter(s=> s.id == id )[0];
      }
      this.addOrUpdateModel.show();

  }
  CreateOrUpdate(){
    if( this.addProject.id==null){
      
      delete this.addProject['id'];
      

      this.projectService.PostProject(this.addProject).subscribe({
        next : (data) =>{
          console.log(data)
          this.project.unshift(data);
          this.addOrUpdateModel.hide();
          //console.log(data)
        },
        error:(error)=>{
          console.log(error);
          console.log(this.addProject)
        }
      })
    }else {
      console.log("test")
      
      this.projectService.UpdateProject(this.addProject,this.addProject.id).subscribe({
        next:(data)=>{
          this.project.unshift(data);
          this.addOrUpdateModel.hide();
        },
        error:(error)=>{
          console.log(error);
          console.log(this.addProject)
        }
      })
    }
  }
  getAllProject(){
    this.projectService.GetAllProject().subscribe({
      next :(data)=>{
        this.project=data;
        console.log(data)
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  
  OpenDeleteModel(projectId:any){
    this.RemoveProject = projectId;
    this.deleteModel.show();
  }

  delete(){
    this.projectService.deleteProject(this.RemoveProject).subscribe({
      next:(data)=>{
        this.project = this.project.filter(s=> s.id != this.RemoveProject);
        this.RemoveProject = 0;
        this.deleteModel.hide();
      }
    })
  }
  }

