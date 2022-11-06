import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { RegisterSchoolAdminDialogComponent } from './register-school-admin-dialog/register-school-admin-dialog.component';

export interface SchoolAdminData {
  id: number;
  adminFullName: string;
  adminEmail: string;
  adminUsername: string;
  adminPassword: string;
  adminPhone: string;
  adminPosition: string;
  adminSchool: string;
}

const STATIC_DATA: SchoolAdminData[]=[
  {id: 1, adminFullName: 'Kiyotaka Ijichi', adminEmail: 'ijichi@hotmail.com', adminUsername: 'ijichi', adminPassword: 'ijichi123' , adminPhone: '+8197-833-0159', adminPosition: 'APA NIH', adminSchool: 'ISI GAK NIH'}

]

@Component({
  selector: 'app-register-school-admin',
  templateUrl: './register-school-admin.component.html',
  styleUrls: ['./register-school-admin.component.css']
})
export class RegisterSchoolAdminComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'adminFullName', 'adminEmail', 'adminUsername', 'adminPassword' , 'adminPhone', 'adminPosition', 'adminSchool', 'action'];
  dataSource!: MatTableDataSource<SchoolAdminData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) { }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(STATIC_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(RegisterSchoolAdminDialogComponent, {
      width: "40%"
    }).afterClosed();
  }

}
