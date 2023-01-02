import { Injectable } from '@angular/core';
import { Resource } from 'src/app/model/resource.model'; // Calling Resource model
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  resourceReq:Resource[] = [] // creating new array for storing data
  private resourceUpdate = new Subject<Resource[]>();

  constructor(private http:HttpClient) { }

  /**
   * @param description 
   * @param resourceType 
   * @param numRequired 
   * This function is used to add new resource request
   */
  create(type: string, date:string, description: string, resourceType: string,
     numRequired: string, school: string, schoolCity: string){
      this.http.post('http://localhost:3000/api/resourceReq', {
        type: type,
        date: date,
        description: description,
        resourceType: resourceType,
        numRequired: numRequired, 
        school: school, 
        schoolCity: schoolCity
      }).subscribe((response) => {
        console.log(response);
      })
  }

  getResourceUpdateListener(){
   return this.resourceUpdate.asObservable(); 
  }

  /**
   * @returns 
   * this funtion is used to show resource 
   * request data that have been created
   */
  show(){
    this.http.get<{message: string, resource:Resource[]}>
    ('http://localhost:3000/api/resourceReq').subscribe((resourecData) => {
      this.resourceReq = resourecData.resource;
      this.resourceUpdate.next([...this.resourceReq]);
    })
  }
}
