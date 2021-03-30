import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HRManagers } from '../Components/loginpage/HRManagers';

@Injectable({
  providedIn: 'root'
})
export class HrLoginService {

  constructor(private httpClient : HttpClient) { 
  }
  hrManagerLogin(theHrManager : HRManagers){
    return this.httpClient.post<HRManagers>("http://localhost:9095/hrManager/Login", theHrManager);
   }
}