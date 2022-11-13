import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface ReviewOffers {
  no: number;
  requestDesc: string;
  listOffer: string;
}

const STATIC_DATA: ReviewOffers[]=[
  {no: 1, requestDesc: 'Pokoknya bagus', listOffer: 'PC High Level Entry'}
]

@Component({
  selector: 'app-review-offers-dialog',
  templateUrl: './review-offers-dialog.component.html',
  styleUrls: ['./review-offers-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ReviewOffersDialogComponent implements AfterViewInit {

  displayedColumns: string[] = ['no', 'desc', 'listOffer', 'action'];
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

}

// nama request, tanggal, status
