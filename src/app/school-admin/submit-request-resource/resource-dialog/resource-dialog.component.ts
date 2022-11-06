import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resource-dialog',
  templateUrl: './resource-dialog.component.html',
  styleUrls: ['./resource-dialog.component.css']
})
export class ResourceDialogComponent implements OnInit {

  resourceReqForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<ResourceDialogComponent>) { }

  ngOnInit(): void {
    this.resourceReqForm = this.formBuilder.group({
      resourceDesc: ['', Validators.required],
      resourceType: ['', Validators.required],
      resourceNumber: ['', Validators.required]
    })
  }

}
