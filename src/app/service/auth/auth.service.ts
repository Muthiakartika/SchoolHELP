import { Injectable } from '@angular/core';
import { UserVolunteer } from 'src/app/model/userVolunteer.model'; // calling UserVolunteer model
import { Role } from 'src/app/model/role.model'; // Calling Role model
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router'; // calling Router modul
import { User } from 'src/app/model/user.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token:string; 
  user:UserVolunteer // creating new array for storing data
  private authStatusListener = new Subject<boolean>();
  
  constructor(private http:HttpClient, private router:Router) {}

  getToken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  /**
   * 
   * @param username 
   * @param password 
   * @param fullname 
   * @param Email 
   * @param phone 
   * @param dob 
   * @param occupation 
   * 
   * This function is used for registering new volunteer user
   */
  register( username: string, password: string, fullname: string, email: string,
     phone: string, dob: string, occupation: string, role: string){
      this.http.post('http://localhost:3000/api/user/signup', 
      {username: username,
        password: password,
        fullname: fullname,
        email: email,
        phone: phone,
        dob: dob,
        occupation: occupation,
        role: role}).subscribe((response) =>{
        console.log(response);
      })
  }

  login(username: string, password: string){

    this.http.post<{token:string, user:UserVolunteer}>('http://localhost:3000/api/user/login', 
    {username: username,
      password: password,
      }).subscribe((response) => {

        const roleUser = response.user.role;
        const token = localStorage.setItem('token', response.token);
        console.log(token);
        this.authStatusListener.next(true);

        if(roleUser== 'schoolHelp'){
          this.router.navigate(['dashboard-schoolhelp-admin'])
        }
        else if(roleUser == 'schoolAdmin'){
          this.router.navigate(['dashboard-school-admin'])
        }
        else if(roleUser == 'volunteer'){
          this.router.navigate(['dashboard-volunteer'])
        }
    });
  }

  logout(){
    // Remove the user's login status from localStorage
    localStorage.removeItem(this.token);
    this.router.navigate(['/login'])

  }
}

