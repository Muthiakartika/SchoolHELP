import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Assistance } from 'src/app/model/assistance.model'; // calling assitance model
import { AssistanceService } from 'src/app/service/request/assistance.service'; // calling assitance service
import { Router } from '@angular/router'; // calling router modul
import { Subscription } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-assistance-dialog',
  templateUrl: './assistance-dialog.component.html',
  styleUrls: ['./assistance-dialog.component.css']
})
export class AssistanceDialogComponent implements OnInit {

  assistanceReqForm!: FormGroup;
  assistanceReq:Assistance[] = [] // creating new array for calling data from assitance model
  user: User;

  schoolSub: Subscription | undefined;
  
  constructor(
    private service:AssistanceService, 
    private router:Router) { }

  ngOnInit(): void {
     // get the JWT from local storage
     const token = localStorage.getItem('token');

     // decode the JWT to access the user's information
     this.user = jwtDecode(token);
     console.log(this.user)
  }

  /**
   * this function is used to call create() function in service 
   * and redirect the user to submit request assistance page after create new data
   */
  createAssistance(form:NgForm){
    if (form.invalid) {
      return;
    }
    this.service.create(form.value.type, 
      form.value.date,
      form.value.description,
      form.value.proposedDate,
      form.value.time, 
      form.value.level,
      form.value.numStudent,
      form.value.school,
      form.value.schoolCity);
    this.router.navigate(['submit-request-assistance'])
  }

}
