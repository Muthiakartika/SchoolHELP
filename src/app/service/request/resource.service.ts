import { Injectable } from '@angular/core';
import { Resource } from 'src/app/model/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }

  resourceReq:Resource[] = []

  create(description: string,
    resourceType: string,
    numRequired: string){

      this.resourceReq.push({
        id: Math.floor(Math.random() * 10),
        date: '12/12/2022',
        status: 'New',
        description: description,
        resourceType: resourceType,
        numRequired: numRequired,
      });

      console.log(this.resourceReq)
  }

  show(){
    return this.resourceReq;
  }
}
