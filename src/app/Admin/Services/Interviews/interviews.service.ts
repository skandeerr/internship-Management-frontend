import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interviews } from './interviews';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  constructor(private httpClient : HttpClient) { }

  GetAllInterviews(){
    return this.httpClient.get<interviews[]>("https://localhost:7056/Entretien")
  }
  PostInterview(post : interviews){
    return this.httpClient.post<interviews>("https://localhost:7056/Entretien",post)
  }

  validateInterview(id:any){
    return this.httpClient.put<interviews>(`https://localhost:7056/Entretien/validate/${id}`,id)
  }
  AcceptInter(id:any){
    return this.httpClient.put<interviews>(`https://localhost:7056/Entretien/accept/${id}`,id)
  }
  RefuseInter(id:any){
    return this.httpClient.put<interviews>(`https://localhost:7056/Entretien/refuse/${id}`,id)
  }
}
