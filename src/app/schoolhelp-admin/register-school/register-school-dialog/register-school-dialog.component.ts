import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { School } from 'src/app/model/school.model';
import { SchoolService } from 'src/app/service/school/school.service';
import { Router } from '@angular/router';
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

  schoolName: "";
  address: "";
  city: "";

  school:School[] = []

  ngOnInit(): void {
    this.schoolForm = this.formBuilder.group({
      
      schoolName: ['', Validators.required],
      schoolCity: ['', Validators.required],
      schoolAddress: ['', Validators.required]
    });
  }


  createSchool(){
    this.service.create(this.schoolName, this.address, this.city)
    this.router.navigate(['register-school'])
  }

}
