import { Guid } from 'guid-typescript';
export interface entretien {
    id : Guid,
    Date_entretien : Date,
    id_user : Guid,
    id_proj : Guid,
    validate : number

}