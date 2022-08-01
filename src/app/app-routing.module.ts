import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { EntretienComponent } from './Admin/entretien/entretien.component';
import { HomeComponent } from './Admin/home/home.component';
import { LoginComponent } from './Admin/login/login.component';
import { ProfilComponent } from './Admin/profil/profil.component';
import { ProjectsComponent } from './Admin/projects/projects.component';
import { ProjetPostulerComponent } from './Admin/projet-postuler/projet-postuler.component';
import { UsersComponent } from './Admin/users/users.component';

const routes: Routes = [
  {
    path: 'admin/login', component: LoginComponent
  },
  {
    path: 'admin', component: DashbordComponent,
   children : [{
    
      path: 'projects', component: ProjectsComponent
  },
  {
    
    path: 'users', component: UsersComponent
},
{
    
  path: 'profil', component: ProfilComponent
},
{
    
  path: 'interviews', component: EntretienComponent
},
{
    
  path: 'home', component: HomeComponent
},
{
    
  path: 'projects/postulate', component: ProjetPostulerComponent
}
]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
