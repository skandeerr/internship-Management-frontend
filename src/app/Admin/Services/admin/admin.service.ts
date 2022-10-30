import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailAdmin } from './DetailAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private HttpClient : HttpClient) { }

  getAllAdmin(){
    return this.HttpClient.get<any>("https://localhost:7056/Admin/all")
  }
  DeleteAdmin(id:any){
    return this.HttpClient.delete<any>(`https://localhost:7056/Admin/delete/profil/${id}`)
  }
  AddAdmin(admin : DetailAdmin){
    return this.HttpClient.post<DetailAdmin>("https://localhost:7056/Admin/registre",admin)
  }
 
}
