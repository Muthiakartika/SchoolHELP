import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Role } from 'src/app/model/role.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolAdminService {

  constructor() { }

  admin:User[] = [];

  create(
    username: string,
    password: string,
    fullname: string,
    email: string,
    phone: string,
    position: string,
    schoolName: string
    )
    {    
      this.admin.push({
        id: Math.floor(Math.random() * 10),
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        phone: phone,
        role : Role.Admin,
        staffID: Math.floor(Math.random() * 10),
        position: position,
        schoolName: schoolName
      })

      console.log(this.admin);
    }

  show(){
    return this.admin;
  }
}
