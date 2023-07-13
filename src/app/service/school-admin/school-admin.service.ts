import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model'; // calling User model
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { School } from 'src/app/model/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolAdminService {

  admin:User[] = []; // creating new array for storing data
  schools:School[] = [];
  private adminUpdate = new Subject<User[]>();
  private schoolUpdate = new Subject<School[]>();

  constructor(private http:HttpClient) {}

  /**
   * @param username 
   * @param password 
   * @param fullname 
   * @param email 
   * @param phone 
   * @param position 
   * @param schoolName 
   * this function is used for registering new school administrator
   */
  create(username: string, password: string, fullname: string, email: string, phone: string, role:string, 
    staffID: string, position: string, schoolName: string){
    let schoolCityData = this.schools.find(s => s.schoolName === schoolName);  
    // console.log(schoolCityData.city);
    this.http.post('http://localhost:3000/api/schoolAdmin', 
      {username: username,
        password: password,
        fullname: fullname,
        email: email,
        phone: phone,
        role: role,
        staffID: staffID,
        position: position,
        schoolName: schoolName,
        schoolCity: schoolCityData.city}).subscribe((response) =>{
          console.log(response);
        })
  }

  getAdminUpdateListener(){
    return this.adminUpdate.asObservable();
  }

  /**
   * @returns 
   * this function is used to show data that has been created
   */
  show(){this.http.get<{message: string, admin:User[]}>
  ('http://localhost:3000/api/schoolAdmin').subscribe((adminData) =>{
   this.admin= adminData.admin;
   this.adminUpdate.next([...this.admin]);
  //  console.log(this.adminUpdate);
  });
 }

   /**
   * @returns 
   * this function is used to show schools that has been created
   */
   schoolList(){this.http.get<{message: string, schoolNames:School[]}>
   ('http://localhost:3000/api/schoolNames').subscribe((schData) =>{
    this.schools= schData.schoolNames;
    this.schoolUpdate.next([...this.schools]);
    // console.log(this.schoolUpdate);
   });
  }

 getSchoolUpdateListener(){
  return this.schoolUpdate.asObservable();
}
 
}
