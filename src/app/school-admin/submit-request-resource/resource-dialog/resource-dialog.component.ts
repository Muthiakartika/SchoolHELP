import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Resource } from 'src/app/model/resource.model'; // calling Resource model
import { ResourceService } from 'src/app/service/request/resource.service'; // calling Resource service
import { Router } from '@angular/router'; // calling router modul
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-resource-dialog',
  templateUrl: './resource-dialog.component.html',
  styleUrls: ['./resource-dialog.component.css']
})
export class ResourceDialogComponent implements OnInit {

  resourceReqForm!: FormGroup;
  resourceReq:Resource[] = [] // creating array data for taking data from resource model
  user: User;
  
  constructor( 
    private router:Router, private service:ResourceService) { }

  ngOnInit(): void {
     // get the JWT from local storage
     const token = localStorage.getItem('token');

     // decode the JWT to access the user's information
     this.user = jwtDecode(token);
     console.log(this.user)
  }


  /**
   * this function is used to call create function in service 
   * and redirect the user to submit request resource page
   */
  createResource(form:NgForm){
    if(form.invalid){
      return;
    }

    this.service.create(
      form.value.type,
      form.value.date,form.value.description, 
      form.value.resourceType,form.value.numRequired,
      form.value.school,
      form.value.schoolCity);
    this.router.navigate(['submit-request-resource'])
  }
}
