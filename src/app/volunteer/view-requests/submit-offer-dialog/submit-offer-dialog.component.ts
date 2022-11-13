import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Request } from 'src/app/model/request.model';
import { SubmitOfferService } from 'src/app/service/submit-offer/submit-offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-offer-dialog',
  templateUrl: './submit-offer-dialog.component.html',
  styleUrls: ['./submit-offer-dialog.component.css']
})
export class SubmitOfferDialogComponent implements OnInit {

  actionButton: string = 'Submit';
  applyForm!: FormGroup;
  dataRequest:Request[]=[]
  remarks : '';

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<SubmitOfferDialogComponent>,
    private service:SubmitOfferService, private router:Router) { }

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group({
      remarks: ['', Validators.required]
    });
  }

  submitRequest(){
    this.service.create(this.remarks);
    this.router.navigate(['view-requests'])
  }

}
