import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { UserVolunteer } from '../model/userVolunteer.model';

@Component({
  selector: 'app-register-volunteer',
  templateUrl: './register-volunteer.component.html',
  styleUrls: ['./register-volunteer.component.css']
})
export class RegisterVolunteerComponent implements OnInit {

  hide = true;
  public registerForm: FormGroup;

  user:UserVolunteer[] = []
  username= "";
  password: "";
  fullname: "";
  Email: "";
  phone: "";
  dob: "";
  occupation: "";

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder: FormBuilder, private router:Router, private service:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email_: ['', Validators.required, Validators.email],
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      occup: ['', Validators.required]
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp(){{
    this.service.register(this.username, this.password, this.fullname, this.Email, this.phone, this.dob, this.occupation)
    window.alert('You have been registered successfully');
    this.router.navigate(['dashboard-volunteer'])
  }
  }

}
