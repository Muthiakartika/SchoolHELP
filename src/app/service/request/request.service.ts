import { Injectable } from '@angular/core';
import { Assistance } from 'src/app/model/assistance.model'; // calling Assistance model
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { response } from 'express';
import { School } from 'src/app/model/school.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  assistanceReq:Assistance[] = [] // creating new array for storing data
  school:School[] = [];
  private assitanceUpdate = new Subject<Assistance[]>();
  private schoolUpdate = new Subject<School[]>();
  dataRequest:Request[]=[] // creating new array for storing data
  constructor(private http:HttpClient) { }

  getAssistanceUpdateListener(){
    return this.assitanceUpdate.asObservable();
  }

  /**
   * this funtion is used to show assistance 
   * request data that have been created
   */
  show(){
    this.http.get<{message: string, request:Assistance[]}>
    ('http://localhost:3000/api/viewReq').subscribe((assistanceData) =>{
      this.assistanceReq = assistanceData.request;
      this.assitanceUpdate.next([...this.assistanceReq]);
    })
  }

  getRequest(id: string){
    return{...this.assistanceReq.find(rq => rq.id === id)}
  }
  
  /**
   * 
   * @param remarks 
   * this function is used for creating new data
   */
  // create(remarks:string){
  //   this.dataRequest.push(
  //     {remarks : remarks}
  //   )
  // }


  create(remarks: String,
    status : String,
    fullname: String){
      this.http.post('http://localhost:3000/api/offers',
      {remarks: remarks,
        status : status,
        fullname: fullname}).subscribe((response) =>{
        console.log(response);
      })
  }
}
