import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HRManagers } from './add-new-hr/HRManagers';
@Injectable({
  providedIn: 'root'
})
export class CreateHrDetailsService {

  constructor(private httpClient : HttpClient) { 
  }
  addNewHrManager(theHrManager:HRManagers){
    console.log(theHrManager);
    return this.httpClient.post<HRManagers>("http://localhost:9090/hrManager/addnew",theHrManager);
  }
}
