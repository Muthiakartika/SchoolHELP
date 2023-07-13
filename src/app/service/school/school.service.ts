import { Injectable } from '@angular/core';
import { School } from 'src/app/model/school.model'; // calling school model
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  school:School[] = []; // creating new array for storing data
  private schoolUpdate = new Subject<School[]>();

  constructor(private http:HttpClient) { }
 
  /**
   * @param schoolName 
   * @param address 
   * @param city 
   * this function is used to create new school 
   */
  create(schoolName: string, address: string, city: string)
    {
      this.http.post('http://localhost:3000/api/schools', 
      {schoolID: null,schoolName: schoolName, address: address, city: city}).subscribe((response) =>{
        console.log(response);
      })
    }

   /**
    * @returns 
    * this function is used to show data that have been created
    */ 
  show(){
   this.http.get<{message: string, school:School[]}>
   ('http://localhost:3000/api/schools').subscribe((schoolData) =>{
    this.school = schoolData.school;
    this.schoolUpdate.next([...this.school]);
   });
  }

  getSchoolUpdateListener(){
    return this.schoolUpdate.asObservable();
  }

  /**
   * Showing all school data
   */
  schoolsData(){
    this.http.get<{message: string, schools:School[]}>
    ('http://localhost:3000/api/schoolNames').subscribe((schoolsData) =>{
      this.school = schoolsData.schools;
      this.schoolUpdate.next([...this.school]);
    });
  }


}
