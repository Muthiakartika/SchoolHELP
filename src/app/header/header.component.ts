import { Component, OnInit} from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) {}

  ngOnInit(): void {}

  isAuth(){
    return this.auth.isAuth;
  }

  hAdmin(){
    return this.auth.hAdmin;
  }

  admin(){
    return this.auth.admin;
  }

  volunteer(){
    return this.auth.volunteer;
  }
}
