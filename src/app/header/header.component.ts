import { Component, OnInit} from '@angular/core';

import { AuthService } from '../service/auth/auth.service'; // calling Auth service
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserVolunteer } from '../model/userVolunteer.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  
  constructor(private auth:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.authListenerSubs = this.auth.
    getAuthStatusListener().subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }


  // userRole(){
  //   return this.auth.user.role;
  // }


  onLogout(){
    this.auth.logout;
  }
}
