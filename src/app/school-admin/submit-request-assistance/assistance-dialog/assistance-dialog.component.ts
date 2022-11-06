import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assistance-dialog',
  templateUrl: './assistance-dialog.component.html',
  styleUrls: ['./assistance-dialog.component.css']
})
export class AssistanceDialogComponent implements OnInit {
  assistanceReqForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AssistanceDialogComponent>) { }

  ngOnInit(): void {
    this.assistanceReqForm = this.formBuilder.group({
      tutorialDesc: ['', Validators.required],
      proposedDate: ['', Validators.required],
      tutorialTime: ['', Validators.required],
      studentLevel: ['', Validators.required],
      studentNumber: ['', Validators.required],
    })
  }

}
