import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  public loginForm: FormGroup;
  public isInvalid: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    localStorage.clear();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    })
  }

  // loginChecker(): void{
  //   var isChecked = true;
  //   if(!this.loginForm.valid){
  //     for(var a in this.loginForm.controls){
  //       this.loginForm.controls[a].markAsDirty();
  //       this.loginForm.controls[a].updateValueAndValidity();
  //       isChecked = false;
  //     }
  //   }
  //   if(this.loginForm.valid){
  //     alert('Login Success');
  //     console.log(this.loginForm.value);

  //     localStorage.setItem('token', 'shshsh');
  //     this.loginForm.value.userName == "schoolhelpadmin" ? localStorage.setItem('userRole', 'schoolhelpAdmin') : localStorage.setItem('userRole', 'schoolAdmin');

  //     this.loginForm.reset();
  //     this.router.navigate(['navigation']);

  //   }
  // }

}
