import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model'; // calling user model
import { SchoolAdminService } from 'src/app/service/school-admin/school-admin.service'; // calling school admin service model

@Component({
  selector: 'app-register-school-admin',
  templateUrl: './register-school-admin.component.html',
  styleUrls: ['./register-school-admin.component.css']
})
export class RegisterSchoolAdminComponent implements OnInit {

  displayedColumns: string[] = ['adminFullName', 'adminEmail', 'adminSchool','adminPosition'];
  admin:User[];// creating new array for using user model data
  adminSub: Subscription | undefined;

  constructor(private service:SchoolAdminService) { }
  
  ngOnInit(): void {
    this.service.show(); // calling the show funtion in service and show it in the table
    this.adminSub = this.service.getAdminUpdateListener().subscribe((admin: User[]) =>{
      this.admin = admin;
    });
  }

  ngOnDestroy(){
    this.adminSub.unsubscribe();
  }
}
