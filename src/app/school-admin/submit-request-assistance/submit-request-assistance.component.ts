import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assistance } from 'src/app/model/assistance.model'; // calling Assitance model
import { User } from 'src/app/model/user.model';
import { AssistanceService } from 'src/app/service/request/assistance.service'; // calling Assistance service
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-submit-request-assistance',
  templateUrl: './submit-request-assistance.component.html',
  styleUrls: ['./submit-request-assistance.component.css']
})

export class SubmitRequestAssistanceComponent implements OnInit {

  displayedColumnsAssistance: string[] = ['status', 'requestDate', 'requestDesc', 'proposedDate','tutorialTime', 'studentLevel', 
  'studentNumber'];
  assistanceReq:Assistance[] = [] // creating new array variable for using Assistance model
  private resourceSub: Subscription | undefined;
  user: User;
  
  constructor(private service:AssistanceService) { }

  ngOnInit(): void {
    this.service.show(); // calling the show funtion in service and show it in the table
    this.resourceSub = this.service.getAssistanceUpdateListener()
    .subscribe((assistance: Assistance[])=>{
      this.assistanceReq = assistance;
    })

    // get the JWT from local storage
    const token = localStorage.getItem('token');

    // decode the JWT to access the user's information
    this.user = jwtDecode(token);
    console.log(this.user)
  }

}
