import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserVolunteer } from 'src/app/model/userVolunteer.model';

@Component({
  selector: 'app-dashboard-volunteer',
  templateUrl: './dashboard-volunteer.component.html',
  styleUrls: ['./dashboard-volunteer.component.css']
})
export class DashboardVolunteerComponent implements OnInit {
  user: UserVolunteer;

  constructor() { 
    // get the JWT from local storage
    const token = localStorage.getItem('token');

    // decode the JWT to access the user's information
    this.user = jwtDecode(token);
    console.log(this.user)
  }

  ngOnInit(): void {
  }

}
