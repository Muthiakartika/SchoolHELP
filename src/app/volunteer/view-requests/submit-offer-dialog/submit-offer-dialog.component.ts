import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/service/request/request.service'; // calling submit offer service
import { ParamMap, Router } from '@angular/router'; // calling router modul
import { ActivatedRoute } from '@angular/router';
import { Assistance } from 'src/app/model/assistance.model';
import jwtDecode from 'jwt-decode';
import { UserVolunteer } from 'src/app/model/userVolunteer.model';

@Component({
  selector: 'app-submit-offer-dialog',
  templateUrl: './submit-offer-dialog.component.html',
  styleUrls: ['./submit-offer-dialog.component.css']
})
export class SubmitOfferDialogComponent implements OnInit {

  actionButton: string = 'Submit';
  applyForm!: FormGroup;

  dataRequest:Assistance; // creating new array for using request model data
  private requestId: string;

  user: UserVolunteer;

  constructor(
    private service:RequestService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

     // get the JWT from local storage
     const token = localStorage.getItem('token');

     // decode the JWT to access the user's information
     this.user = jwtDecode(token);
     console.log(this.user)

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.requestId = paramMap.get('requestId');
        this.dataRequest = this.service.getRequest(this.requestId);
      
    })
  }

   /**
   * this function is used to call create() function in the service 
   * and redirect the user to view request page after creating the data
   */
  submitRequest(form: NgForm){
    if (form.invalid){
      return;
    }
    this.service.create(
      form.value.remarks, 
      form.value.status, 
      form.value.fullname);
    this.router.navigate(['view-requests'])
  }

}



