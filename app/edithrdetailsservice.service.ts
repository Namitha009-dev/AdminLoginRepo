import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditHrManagers } from './edithrdetails/EditHrManagers';

@Injectable({
  providedIn: 'root'
})
export class EdithrdetailsserviceService {
constructor(private httpClient : HttpClient) {  }
  editHrManager(theHrManager1){
    return this.httpClient.post<EditHrManagers>("http://localhost:9095/hrManager/updatePassword", theHrManager1);
   }
}
