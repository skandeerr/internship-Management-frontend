import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenInterceptorService } from './token/token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { HeaderComponent } from './Admin/header/header.component';
import { LoginComponent } from './Admin/login/login.component';
import { ProjectsComponent } from './Admin/projects/projects.component';
import { UsersComponent } from './Admin/users/users.component';
import { ProfilComponent } from './Admin/profil/profil.component';
import { EntretienComponent } from './Admin/entretien/entretien.component';
import { HomeComponent } from './Admin/home/home.component';
import { ProjetPostulerComponent } from './Admin/projet-postuler/projet-postuler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './token/auth.guard';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { HeaderUserComponent } from './user/header-user/header-user.component';
import { ContactComponent } from './user/contact/contact.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { RegistreUserComponent } from './user/registre-user/registre-user.component';
import { ProjectUserComponent } from './user/project-user/project-user.component';
import { DetailsProjectComponent } from './user/details-project/details-project.component';
import { ProfilUserComponent } from './user/profil-user/profil-user.component';
import { GetAllAdminComponent } from './Admin/get-all-admin/get-all-admin.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    ProjectsComponent,
    UsersComponent,
    ProfilComponent,
    EntretienComponent,
    HomeComponent,
    ProjetPostulerComponent,
    HomeUserComponent,
    HeaderUserComponent,
    ContactComponent,
    LoginUserComponent,
    RegistreUserComponent,
   
    ProjectUserComponent,
        DetailsProjectComponent,
        ProfilUserComponent,
       
        GetAllAdminComponent,
                AddAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    

  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass :TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
