import { Injectable } from '@angular/core';
import { Assistance } from 'src/app/model/assistance.model'; // calling Assistance model
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { response } from 'express';
import { School } from 'src/app/model/school.model';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  
  assistanceReq:Assistance[] = [] // creating new array for storing data
  school:School[] = [];
  private assitanceUpdate = new Subject<Assistance[]>();
  private schoolUpdate = new Subject<School[]>();

  constructor(private http:HttpClient) { }

  /**
   * @param type 
   * @param description 
   * @param proposedDate 
   * @param time 
   * @param level 
   * @param numStudent 
   * 
   * This function is used to add new assistance request
   */
  create(type: string, date: string, description: string, proposedDate: string, 
    time: string, level: string, numStudent: string, 
    school: string, schoolCity: string){
      this.http.post('http://localhost:3000/api/assistanceReq',
      {type: type,
      date: date,  
      description: description,
      proposedDate: proposedDate,
      time: time, 
      level: level,
      numStudent: numStudent, 
      school: school, schoolCity: schoolCity}).subscribe((response) =>{
        console.log(response);
      })
  }

  getAssistanceUpdateListener(){
    return this.assitanceUpdate.asObservable();
  }

  /**
   * this funtion is used to show assistance 
   * request data that have been created
   */
  show(){
    this.http.get<{message: string, assistance:Assistance[]}>
    ('http://localhost:3000/api/assistanceReq').subscribe((assistanceData) =>{
      this.assistanceReq = assistanceData.assistance;
      this.assitanceUpdate.next([...this.assistanceReq]);
    })
  }

  
}

