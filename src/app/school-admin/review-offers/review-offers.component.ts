import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ReviewOffersDialogComponent } from './review-offers-dialog/review-offers-dialog.component';

export interface ReviewOffers {
  id: number;
  requestDesc: string;
  requestDate: string;
  requestStatus: string;
}

const STATIC_DATA: ReviewOffers[]=[
  {id: 1, requestDesc: 'Assistance for Dark Arts subject', requestDate:'12/1/2022', requestStatus: 'Waiting Confirmation'}
]

@Component({
  selector: 'app-review-offers',
  templateUrl: './review-offers.component.html',
  styleUrls: ['./review-offers.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ReviewOffersComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'requestDesc', 'requestDate', 'requestStatus', 'action'];
  dataSource!: MatTableDataSource<ReviewOffers>;

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
    this.dialog.open(ReviewOffersDialogComponent, {
      width: "40%"
    }).afterClosed();
  }

}

// nama request, tanggal, status