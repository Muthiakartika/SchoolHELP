import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Assistance } from 'src/app/model/assistance.model';
import { AssistanceService } from 'src/app/service/request/assistance.service';

@Component({
  selector: 'app-submit-request-assistance',
  templateUrl: './submit-request-assistance.component.html',
  styleUrls: ['./submit-request-assistance.component.css']
})

export class SubmitRequestAssistanceComponent implements OnInit {

  constructor(private service:AssistanceService) { }
  
  displayedColumnsAssistance: string[] = ['id', 'status','requestDesc', 'requestDate', 'tutorialTime', 'studentLevel', 'studentNumber', 'action'];
  assistanceReq:Assistance[] = []

  ngOnInit(): void {
    this.assistanceReq = this.service.show();
  }

}
