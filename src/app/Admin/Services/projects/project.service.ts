import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient : HttpClient) {}
  GetAllProject(){
    return this.httpClient.get<Project[]>("https://localhost:7056/Project");
  }
  PostProject(addProject : Project){
    return this.httpClient.post<Project>("https://localhost:7056/Project",addProject);
  }
  UpdateProject(putProject : Project,projectid : any){
    return this.httpClient.put<Project>(`https://localhost:7056/Project/${projectid}`,putProject)
  }
  deleteProject(projectid : number){
    return this.httpClient.delete<Project[]>(`https://localhost:7056/Project/${projectid}`)
  }
  GetByIdProject(projectid : any){
    return this.httpClient.get<Project>(`https://localhost:7056/Project/${projectid}`);
  }


}
