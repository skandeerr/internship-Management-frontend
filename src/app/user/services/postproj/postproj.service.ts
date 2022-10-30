import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostProject } from './PostProj';

@Injectable({
  providedIn: 'root'
})
export class PostprojService {

  constructor(private HttpClient : HttpClient) { }

  PostProject(post : PostProject){
    return this.HttpClient.post<PostProject>("https://localhost:7056/PostProj",post)
  }
  GetPostProject(){
    return this.HttpClient.get<PostProject[]>("https://localhost:7056/PostProj");
  }
  GetPostById(id:any){
    return this.HttpClient.get<PostProject[]>(`https://localhost:7056/PostProj/${id}`)
  }
  deletePost(id : any){
    return this.HttpClient.delete<PostProject[]>(`https://localhost:7056/PostProj/${id}`)
  }
}
