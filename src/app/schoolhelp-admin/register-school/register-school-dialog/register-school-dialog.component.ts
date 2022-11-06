import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-school-dialog',
  templateUrl: './register-school-dialog.component.html',
  styleUrls: ['./register-school-dialog.component.css']
})
export class RegisterSchoolDialogComponent implements OnInit {

  actionButton: string = 'Add School';
  schoolForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<RegisterSchoolDialogComponent>) { }

  ngOnInit(): void {
    this.schoolForm = this.formBuilder.group({
      schoolName: ['', Validators.required],
      schoolCity: ['', Validators.required],
      schoolAddress: ['', Validators.required]
    });
  }

  addSchool(){
    
  }

}
