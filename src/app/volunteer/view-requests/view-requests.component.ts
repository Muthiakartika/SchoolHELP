import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubmitOfferDialogComponent } from './submit-offer-dialog/submit-offer-dialog.component';

export interface ViewRequests {
  id: number;
  status: string
  requestDesc: string;
  requestDate: string;
  schoolName: string;
  schoolCity: string;
}

const STATIC_DATA: ViewRequests[]= [
  {id: 1, status: 'New', requestDesc: 'Assistance in cursed tools subject', requestDate: '1/2/2023', schoolName: 'Tokyo Metropolitan Curse Technical College', schoolCity: 'Tokyo'}
]

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  
  displayedColumns: string[] = ['id', 'status','requestDesc', 'requestDate', 'schoolName', 'schoolCity', 'action'];
  dataSource!: MatTableDataSource<ViewRequests>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(STATIC_DATA);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(SubmitOfferDialogComponent, {
      width: "40%"
    }).afterClosed();
  }

}
