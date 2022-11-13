import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Assistance } from 'src/app/model/assistance.model';
import { AssistanceService } from 'src/app/service/request/assistance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistance-dialog',
  templateUrl: './assistance-dialog.component.html',
  styleUrls: ['./assistance-dialog.component.css']
})
export class AssistanceDialogComponent implements OnInit {
  assistanceReqForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service:AssistanceService, private router:Router) { }

  ngOnInit(): void {
    this.assistanceReqForm = this.formBuilder.group({
      requestDesc: ['', Validators.required],
      requestDate: ['', Validators.required],
      tutorialTime: ['', Validators.required],
      studentLevel: ['', Validators.required],
      studentNumber: ['', Validators.required],
    })
  }

  description: '';
  proposedDate: '';
  time: '';
  level: '';
  numStudent: '';

  assistanceReq:Assistance[] = []

  createAssistance(){
    this.service.create(this.description, this.proposedDate, this.time, this.level, this.numStudent);
    this.router.navigate(['submit-request-assistance'])
  }

}
