import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { SchoolAdminService } from 'src/app/service/school-admin/school-admin.service';

@Component({
  selector: 'app-register-school-admin-dialog',
  templateUrl: './register-school-admin-dialog.component.html',
  styleUrls: ['./register-school-admin-dialog.component.css']
})
export class RegisterSchoolAdminDialogComponent implements OnInit {

  actionButton: string = 'Add Admin';
  adminForm!: FormGroup;
  
  hide = true;

  constructor(private formBuilder: FormBuilder, private adminService:SchoolAdminService) { }

  username: "";
  password: "";
  fullname: "";
  email: "";
  phone: "";
  position: "";
  schoolName: "";

  dataAdmin:User[] = []

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      adminFullName: ['', Validators.required],
      adminEmail: ['', Validators.required],
      adminUsername: ['', Validators.required],
      adminPassword: ['', Validators.required],
      adminPhone: ['', Validators.required],
      adminPosition: ['', Validators.required],
      adminSchool: ['', Validators.required]
    });
  }

  addSchoolAdmin(){
    this.adminService.create(this.username, this.password, this.fullname,
       this.email, this.phone, this.position, this.schoolName);
  }
}
