import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // calling router modul
import { User } from 'src/app/model/user.model'; // calling user model
import { SchoolAdminService } from 'src/app/service/school-admin/school-admin.service'; // calling school admin service
import { HttpClient } from '@angular/common/http';
import { School } from 'src/app/model/school.model';
import { Subscription } from 'rxjs';
import jwtDecode from 'jwt-decode';



@Component({
  selector: 'app-register-school-admin-dialog',
  templateUrl: './register-school-admin-dialog.component.html',
  styleUrls: ['./register-school-admin-dialog.component.css']
})
export class RegisterSchoolAdminDialogComponent implements OnInit {

  actionButton: string = 'Add Admin';
  public adminForm: FormGroup;
  user: User;
  
  hide = true;
  schoolSub: Subscription | undefined;
  
  constructor(private formBuilder: FormBuilder, private adminService:SchoolAdminService,
    private router:Router, private http:HttpClient) { }

  dataAdmin:User[] = [] // creating new array for using user model data
  documents: any[]
  schools: School[];
    
  ngOnInit(): void {

    // showing list of school data available
    this.adminService.schoolList(); 
    this.schoolSub = this.adminService.getSchoolUpdateListener()
    .subscribe((schools: School[]) =>{
      this.schools = schools;
      // console.log(this.schools);
    });

     // get the JWT from local storage
     const token = localStorage.getItem('token');

     // decode the JWT to access the user's information
     this.user = jwtDecode(token);
    //  console.log(this.user)
  }


  /**
   * this function is used to call create() function in the service 
   * and redirect the user to register school page after creating the data
   */
  addSchoolAdmin(form:NgForm){
    if(form.invalid){
      return;
    }
    // console.log(form.value.schoolName);

    this.adminService.create(
      form.value.username, 
      form.value.password, 
      form.value.fullname,
      form.value.email, 
      form.value.phone, 
      form.value.role, 
      form.value.staffID,
      form.value.position, 
      form.value.schoolName);
    this.router.navigate(['register-school-admin'])
  }
}
