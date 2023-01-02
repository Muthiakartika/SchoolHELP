import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Assistance } from 'src/app/model/assistance.model';
import { Resource } from 'src/app/model/resource.model';
import { AssistanceService } from 'src/app/service/request/assistance.service';
import { ResourceService } from 'src/app/service/request/resource.service';
import { RequestService } from 'src/app/service/request/request.service';
import { SubmitOfferDialogComponent } from './submit-offer-dialog/submit-offer-dialog.component';

import jwtDecode from 'jwt-decode';
import { UserVolunteer } from 'src/app/model/userVolunteer.model';
/**
 * creating static data to be shown inthe table
 */
@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  // Showing resource request
  requests:Assistance[] = [] // creating new array variable for using Assistance model
  private requestSub: Subscription | undefined;

  constructor(private service:RequestService) { }
  
  displayedColumns: string[] = ['status','requestDesc', 'requestDate', 'schoolName', 'schoolCity', 'action'];
  user: UserVolunteer;
  ngOnInit(): void {

    // Fetching Data From request
    this.service.show(); // calling the show funtion in service and show it in the table
    this.requestSub = this.service.getAssistanceUpdateListener()
    .subscribe((request: Assistance[])=>{
      this.requests = request;
    });

    const token = localStorage.getItem('token');
    // decode the JWT to access the user's information
    this.user = jwtDecode(token);
    console.log(this.user)
  }
}
