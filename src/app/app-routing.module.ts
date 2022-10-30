import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { DetailPostComponent } from './Admin/detail-post/detail-post.component';
import { EntretienComponent } from './Admin/entretien/entretien.component';
import { GetAllAdminComponent } from './Admin/get-all-admin/get-all-admin.component';
import { HomeComponent } from './Admin/home/home.component';
import { LoginComponent } from './Admin/login/login.component';
import { ProfilComponent } from './Admin/profil/profil.component';
import { ProjectsComponent } from './Admin/projects/projects.component';
import { ProjetPostulerComponent } from './Admin/projet-postuler/projet-postuler.component';
import { UsersComponent } from './Admin/users/users.component';
import { AuthGuard } from './token/auth.guard';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { DetailsProjectComponent } from './user/details-project/details-project.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { NotificationUserComponent } from './user/notification-user/notification-user.component';
import { ProfilUserComponent } from './user/profil-user/profil-user.component';
import { ProjectUserComponent } from './user/project-user/project-user.component';
import { RegistreUserComponent } from './user/registre-user/registre-user.component';
import { ServicePageComponent } from './user/service-page/service-page.component';

const routes: Routes = [
  {
    path: 'admin/login', component: LoginComponent
  },
  {
    path: 'admin', component: DashbordComponent,canActivate : [AuthGuard],
   children : [{
    
      path: 'projects', component: ProjectsComponent,canActivate : [AuthGuard]
  },
  {
    
    path: 'add', component: AddAdminComponent
},
{
    
  path: 'post/detail/:id', component: DetailPostComponent
},
  {
    
    path: 'get', component: GetAllAdminComponent,canActivate : [AuthGuard]
},
  {
    
    path: 'users', component: UsersComponent,canActivate : [AuthGuard]
},
{
    
  path: 'profil', component: ProfilComponent,canActivate : [AuthGuard]
},
{
    
  path: 'interviews', component: EntretienComponent,canActivate : [AuthGuard]
},

{
    
  path: 'home', component: HomeComponent,canActivate : [AuthGuard]
},
{
    
  path: 'projects/postulate', component: ProjetPostulerComponent,canActivate : [AuthGuard]
}
], 
},
{  
  path: 'user/login', component: LoginUserComponent,
},
{  
  path: 'user/registre', component: RegistreUserComponent,
},
 {
  path: 'user/home', component: HomeUserComponent,
  children : [{
    
    path: 'contact', component: ContactComponent,
},
{
    
  path: 'profil', component: ProfilUserComponent,
},
{
    
  path: 'project', component: ProjectUserComponent,
},
{
    
  path: 'service', component: ServicePageComponent,
},
{
    
  path: 'about', component: AboutComponent,
},
{
    
  path: 'detail/:id', component: DetailsProjectComponent,
}, 
{
    
  path: 'notif', component: NotificationUserComponent,
}




],
 },
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
