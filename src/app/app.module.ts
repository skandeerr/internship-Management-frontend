import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
