import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HRManagers } from '../Components/addinghrdetails/HRManagers';

@Injectable({
  providedIn: 'root'
})
export class AddinghrdetailsService {
  constructor(private httpClient : HttpClient) { 
  }
  addNewHrManager(theHrManager:HRManagers){
    return this.httpClient.post<HRManagers>("http://localhost:9090/hrManager/addnew", theHrManager);
   }
}

