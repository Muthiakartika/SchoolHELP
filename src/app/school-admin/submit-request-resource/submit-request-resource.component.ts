import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResourceDialogComponent } from './resource-dialog/resource-dialog.component';

export interface RequestResource {
  id: number;
  resourceDesc: string;
  resourceType: string;
  resourceNumber: string;
}

const STATIC_DATA: RequestResource[]= [
  {id: 1, resourceDesc: 'PC', resourceType: 'PC', resourceNumber: '100'}
]

@Component({
  selector: 'app-submit-request-resource',
  templateUrl: './submit-request-resource.component.html',
  styleUrls: ['./submit-request-resource.component.css']
})
export class SubmitRequestResourceComponent implements AfterViewInit {

  displayedColumnsResource: string[] = ['id', 'resourceDesc', 'resourceType', 'resourceNumber', 'action'];
  dataSourceResource!: MatTableDataSource<RequestResource>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) { }
  ngAfterViewInit(): void {
    this.dataSourceResource = new MatTableDataSource(STATIC_DATA);
    this.dataSourceResource.paginator = this.paginator;
    this.dataSourceResource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceResource.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceResource.paginator) {
      this.dataSourceResource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(ResourceDialogComponent, {
      width: "40%"
    }).afterClosed();
  }

}
