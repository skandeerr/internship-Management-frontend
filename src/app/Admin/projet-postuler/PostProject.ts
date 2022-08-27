import { Guid } from "guid-typescript";

export interface postProject {
    id : Guid,
    id_proj : Guid,
    id_user : Guid,
    cv : string,
    description : string
}