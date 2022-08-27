import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { entretien } from './entretien';

@Injectable({
  providedIn: 'root'
})
export class EntretienServiceService {

  constructor(private httpClient : HttpClient) { }
  GetAllEntretien(){
    return this.httpClient.get<entretien[]>("https://localhost:7124/Entretien");
  }
  PostEntretien(addEntretien : entretien){
    return this.httpClient.post<entretien[]>("https://localhost:7124/Entretien",addEntretien);
  }
  UpdateEntretien(putEntretien : entretien,entretienid : number){
    return this.httpClient.put<entretien[]>(`https://localhost:7124/Entretien?id=${entretienid}`,putEntretien)
  }
  deleteEntretien(entretienid : number){
    return this.httpClient.delete<entretien[]>(`https://localhost:7124/Entretien?id=${entretienid}`)
  }
  GetByIdEntretien(entretienid : number){
    return this.httpClient.get<entretien[]>(`https://localhost:7124/Entretien?id=${entretienid}`);
  }
}
