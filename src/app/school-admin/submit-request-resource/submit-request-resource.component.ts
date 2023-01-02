import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Resource } from 'src/app/model/resource.model'; // calling Rosource model
import { ResourceService } from 'src/app/service/request/resource.service'; // calling Resource service

@Component({
  selector: 'app-submit-request-resource',
  templateUrl: './submit-request-resource.component.html',
  styleUrls: ['./submit-request-resource.component.css']
})
export class SubmitRequestResourceComponent implements OnInit {

  displayedColumnsResource: string[] = ['status', 'requestDate', 'resourceDesc',
   'resourceType', 'resourceNumber'];
  resourceReq:Resource[] = [] // new array variable for taking data from Resource model
  private assistanceSub: Subscription | undefined;

  constructor(private service:ResourceService) { }
  
  ngOnInit(): void {
    this.service.show(); // calling the show funtion in service and show it in the table
    this.assistanceSub = this.service.getResourceUpdateListener()
    .subscribe((resource: Resource[])=>{
      this.resourceReq = resource;
    })
  }

}
