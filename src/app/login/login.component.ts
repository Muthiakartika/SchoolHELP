import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  login: FormGroup|any;
  constructor(private auth:AuthService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }
  
  isAuth: boolean = false;
  username = "";
  password = "";

  LoginUser(){

    if(this.username=="adminHelp" && this.password=="adminHelp123"){
      this.isAuth = true;
      this.router.navigate(['dashboard-schoolhelp-admin'])
    } else if(this.username=="admin" && this.password=="admin123"){
      this.isAuth = true;
      this.router.navigate(['dashboard-school-admin'])
    } else if( this.username=="volunteer" && this.password=="volunteer123"){
      this.isAuth = true;
      this.router.navigate(['dashboard-volunteer'])
    } else{
      this.isAuth = false;
      window.alert('Invalid Username or Password')
      this.router.navigate(['login'])
    }

  }
}
