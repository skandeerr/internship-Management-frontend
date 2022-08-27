import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postProject } from './PostProject';

@Injectable({
  providedIn: 'root'
})
export class PostProjServiceService {

  constructor(private httpClient : HttpClient) { }

  GetAllPostProject(){
    return this.httpClient.get<postProject[]>("https://localhost:7124/Project");
  }
  PostProject(addpostProject : postProject){
    return this.httpClient.post<postProject[]>("https://localhost:7124/Project",addpostProject);
  }
  UpdatePostProject(putpostProject : postProject,postProjectid : number){
    return this.httpClient.put<postProject[]>(`https://localhost:7124/Project?id=${postProjectid}`,putpostProject)
  }
  deletePostProject(postProjectid : number){
    return this.httpClient.delete<postProject[]>(`https://localhost:7124/Project?id=${postProjectid}`)
  }
  GetByIdPostProject(postProjectid : number){
    return this.httpClient.get<postProject[]>(`https://localhost:7124/Project?id=${postProjectid}`);
  }
}
