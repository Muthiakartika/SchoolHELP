import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service'; // calling Auth service 
import { Router } from '@angular/router'; // calling Router modul
import { UserVolunteer } from '../model/userVolunteer.model'; // calling UserVolunteer model

@Component({
  selector: 'app-register-volunteer',
  templateUrl: './register-volunteer.component.html',
  styleUrls: ['./register-volunteer.component.css']
})
export class RegisterVolunteerComponent implements OnInit {

  hide = true;
  public registerForm: FormGroup;

  user:UserVolunteer[] = [] // creating boolean variable for storing data
  
  constructor(private router:Router, private service:AuthService) { }

  ngOnInit(): void {}

  /**
   * this function is used for calling register function in AuthService 
   * and redirect the user into their dashboard page
   */
  signUp(form: NgForm){
    if(form.invalid){
      return;
    }
    this.service.register(
        form.value.username,
        form.value.password,
        form.value.fullname,
        form.value.email,
        form.value.phone,
        form.value.dob,
        form.value.occupation,
        form.value.role
    );
    this.router.navigate(['/login'])
  }
}
