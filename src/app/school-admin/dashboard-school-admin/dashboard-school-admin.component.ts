import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-dashboard-school-admin',
  templateUrl: './dashboard-school-admin.component.html',
  styleUrls: ['./dashboard-school-admin.component.css']
})
export class DashboardSchoolAdminComponent implements OnInit {
  user: User;

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
