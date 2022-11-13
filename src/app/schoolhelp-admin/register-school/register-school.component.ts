import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { RegisterSchoolDialogComponent } from './register-school-dialog/register-school-dialog.component';
import { SchoolService } from 'src/app/service/school/school.service';
import { School } from 'src/app/model/school.model';

@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.css']
})

export class RegisterSchoolComponent implements OnInit {

  displayedColumns: string[] = ['id', 'schoolName', 'schoolCity', 'schoolAddress', 'action'];
  school:School[] =[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:SchoolService ) { }
  
  ngOnInit(): void {
    this.school= this.service.show();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

}
