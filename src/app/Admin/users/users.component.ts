import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { users } from '../Services/users/users';
import { UsersService } from '../Services/users/users-service.service';
declare var window:any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : users[] = [];
  userValidateId : any;
  ValidateModel : any;
 
  constructor(private userService : UsersService, private router : Router) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.ValidateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    
  }

  getAllUsers(){
    this.userService.GetAllUsers().subscribe({
      next :(data)=>{
        this.user=data;
        console.log(this.user)
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    
  }
 openModel(id:any){
    this.userValidateId=id;
    this.ValidateModel.show();

 }
 validateUser(){
  this.userService.validateUser(this.userValidateId).subscribe({
    next:(data)=>{
      this.ValidateModel=EMPTY;
      
    }
  })
  this.ValidateModel.hide()
  window.location.reload();
 }
}
