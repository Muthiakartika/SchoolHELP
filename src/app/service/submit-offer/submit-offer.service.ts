import { Injectable } from '@angular/core';
import { Request } from 'src/app/model/request.model';

@Injectable({
  providedIn: 'root'
})
export class SubmitOfferService {

  constructor() { }

  dataRequest:Request[]=[]

  create(remarks:string){
    this.dataRequest.push(
      {remarks : remarks}
    )
  }
}
