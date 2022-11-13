import { Injectable } from '@angular/core';
import { UserVolunteer } from 'src/app/model/userVolunteer.model';
import { Role } from 'src/app/model/role.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuth: boolean = false;
  hAdmin: Role.AdminHELP;
  admin: Role.Admin;
  volunteer: Role.Volunteer;
  user:UserVolunteer[] = []

  constructor() {}

  register( username: string,
    password: string,
    fullname: string,
    Email: string,
    phone: string,
    dob: string,
    occupation: string){

      this.user.push({
        id: Math.floor(Math.random() * 10),
        username: username,
        password: password,
        fullname: fullname,
        Email: Email,
        phone: phone,
        role : Role.Volunteer,
        dob: dob,
        occupation: occupation
      })  
      
      console.log(this.user)
  }
}

