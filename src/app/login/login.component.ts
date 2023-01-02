import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service'; // calling Auth service
import { Router } from '@angular/router'; // calling Router modul

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

  ngOnInit(): void { }


  /**
   * this function is used for user login and validate it
   */
  LoginUser(form: NgForm){
    if(form.invalid){
      return;
    }
    
    this.auth.login(form.value.username, form.value.password);      
  }
}
