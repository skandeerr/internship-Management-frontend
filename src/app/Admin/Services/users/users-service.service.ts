import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }

  GetAllUsers(){
    return this.httpClient.get<users[]>("https://localhost:7056/user/all");
  }
  validateUser(id:any){
    return this.httpClient.put<any>(`https://localhost:7056/Admin/validate/user/${id}`,id)
  }
 
}
