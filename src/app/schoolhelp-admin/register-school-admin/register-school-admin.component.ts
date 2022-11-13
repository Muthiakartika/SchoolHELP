import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { User } from 'src/app/model/user.model';
import { SchoolAdminService } from 'src/app/service/school-admin/school-admin.service';



@Component({
  selector: 'app-register-school-admin',
  templateUrl: './register-school-admin.component.html',
  styleUrls: ['./register-school-admin.component.css']
})
export class RegisterSchoolAdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'adminFullName', 'adminEmail', 'adminPhone', 'adminSchool', 'action'];
  dataAdmin:User[] =[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:SchoolAdminService) { }
  
  ngOnInit(): void {
    this.dataAdmin = this.service.show();
  }
}
