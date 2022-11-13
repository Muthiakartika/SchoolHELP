import { Injectable } from '@angular/core';
import { Assistance } from 'src/app/model/assistance.model';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor() { }

  assistanceReq:Assistance[] = []

  create(description: string,
    proposedDate: string,
    time: string,
    level: string,
    numStudent: string){

      this.assistanceReq.push({
        id: Math.floor(Math.random() * 10),
        date: '12/12/2022',
        status: 'New',
        description: description,
        proposedDate: proposedDate,
        time: time,
        level: level,
        numStudent: numStudent,
      });

      console.log(this.assistanceReq)
  }

  show(){
    return this.assistanceReq;
  }
}
