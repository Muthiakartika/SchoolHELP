import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Resource } from 'src/app/model/resource.model';
import { ResourceService } from 'src/app/service/request/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-dialog',
  templateUrl: './resource-dialog.component.html',
  styleUrls: ['./resource-dialog.component.css']
})
export class ResourceDialogComponent implements OnInit {

  resourceReqForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router:Router, private service:ResourceService) { }

  ngOnInit(): void {
    this.resourceReqForm = this.formBuilder.group({
      resourceDesc: ['', Validators.required],
      resourceType: ['', Validators.required],
      resourceNumber: ['', Validators.required]
    })
  }

  description: '';
  resourceType: '';
  numRequired: '';

  resourceReq:Resource[] = []

  createResource(){
    this.service.create(this.description, this.resourceType, this.numRequired);
    this.router.navigate(['submit-request-resource'])
  }
}
