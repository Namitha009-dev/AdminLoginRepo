
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HRManagers } from '../components/login-page/hrManagers';

@Injectable({
  providedIn: 'root'
})
export class HrLoginService {

  constructor(private httpClient : HttpClient) { 
  }
  hrManagerLogin(theHrManager : HRManagers){
    return this.httpClient.post<HRManagers>("http://localhost:9095/hrManager/Login", theHrManager);
   }
   addNewHrManager(theHrManager:HRManagers){
    return this.httpClient.post<HRManagers>("http://localhost:9090/hrManager/addnew", theHrManager);
   }
}