import { Injectable } from '@angular/core';
import { School } from 'src/app/model/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  school:School[] = [];

  create(schoolName: string,
    address: string,
    city: string)
    {    
      this.school.push({
        schoolID : Math.floor(Math.random() * 10),
        schoolName : schoolName,
        address : address,
        city : city,
      })

      console.log(this.school);
    }

  show(){
    return this.school;
  }
}
