import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { School } from 'src/app/model/school.model'; //calling School model
import { SchoolService } from 'src/app/service/school/school.service'; //calling school service
import { Router } from '@angular/router'; // calling router modul
@Component({
  selector: 'app-register-school-dialog',
  templateUrl: './register-school-dialog.component.html',
  styleUrls: ['./register-school-dialog.component.css']
})
export class RegisterSchoolDialogComponent implements OnInit {

  actionButton: string = 'Add School';
  schoolForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private service:SchoolService, private router:Router) { }

  schoolName: ""; // declare variable 
  address: ""; // declare variable
  city: ""; // declare variable

  school:School[] = [] // creating new variable array to call School model data

  ngOnInit(): void {
    this.schoolForm = this.formBuilder.group({
      
      schoolName: ['', Validators.required],
      schoolCity: ['', Validators.required],
      schoolAddress: ['', Validators.required]
    });
  }


  /**
   * this function is used to call create() function in the service 
   * and redirect the user to register school page after creating the data
   */
  createSchool(){
    this.service.create(this.schoolName, this.address, this.city)
    this.router.navigate(['register-school'])
  }

}
