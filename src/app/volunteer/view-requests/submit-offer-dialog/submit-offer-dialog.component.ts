import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-offer-dialog',
  templateUrl: './submit-offer-dialog.component.html',
  styleUrls: ['./submit-offer-dialog.component.css']
})
export class SubmitOfferDialogComponent implements OnInit {

  actionButton: string = 'Submit';
  applyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<SubmitOfferDialogComponent>) { }

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group({
      remarks: ['', Validators.required]
    });
  }

}
