import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResourceDialogComponent } from './resource-dialog/resource-dialog.component';
import { Resource } from 'src/app/model/resource.model';
import { ResourceService } from 'src/app/service/request/resource.service';

@Component({
  selector: 'app-submit-request-resource',
  templateUrl: './submit-request-resource.component.html',
  styleUrls: ['./submit-request-resource.component.css']
})
export class SubmitRequestResourceComponent implements OnInit {

  displayedColumnsResource: string[] = ['id', 'status', 'resourceDesc', 'resourceType', 'resourceNumber', 'action'];
  resourceReq:Resource[] = []

  constructor(private service:ResourceService) { }
  
  ngOnInit(): void {
    this.resourceReq = this.service.show();
  }

}
