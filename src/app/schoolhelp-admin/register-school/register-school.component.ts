import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import { SchoolService } from 'src/app/service/school/school.service'; // calling school service
import { School } from 'src/app/model/school.model'; // calling school model
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.css']
})

export class RegisterSchoolComponent implements OnInit {

  displayedColumns: string[] = ['schoolName', 'schoolCity', 'schoolAddress'];
  school:School[] =[] // creating new array for using school model data
  private schoolSub: Subscription | undefined;
  
  
  constructor(private service:SchoolService) { }
  
  ngOnInit(): void { 
    this.service.show();// calling the show function in service and show it in the table
    this.schoolSub = this.service.getSchoolUpdateListener()
    .subscribe((school: School[]) =>{
      this.school = school;
    });
  }


  ngOnDestroy(){
    this.schoolSub.unsubscribe();
  }

}
