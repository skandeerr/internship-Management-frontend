import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient : HttpClient) { }

  getAdminByid(id : any){
    return this.httpClient.get<any>(`https://localhost:7056/Admin/${id}`)
  }

  updateProfil(admin:any,id:any){
    return this.httpClient.put<any>(`https://localhost:7056/Admin/edit/profil/${id}`,admin)
  }
}
