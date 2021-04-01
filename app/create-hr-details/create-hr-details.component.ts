import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateHrDetailsService } from '../create-hr-details.service';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HRManager } from './HRManager';

@Component({
  selector: 'app-create-hr-details',
  templateUrl: './create-hr-details.component.html',
  styleUrls: ['./create-hr-details.component.css']
})
export class CreateHrDetailsComponent implements OnInit {
  responseData :  any;
  searchHRValue:string;
  theHRManager:HRManager;
  constructor(private httpClient:HttpClient,private router:Router) { 
  }
  
  ngOnInit(): void {
    this.displayAllHr();
  }

  createNewHR(){
    this.router.navigate([`${"addNewHrManager"}`])
  }

  displayAllHr(){
    let responseUrl = this.httpClient.get("http://localhost:9095/hrManager/viewAllHRManagers");
    responseUrl.subscribe((responseData) => {
    this.responseData = responseData;
    console.log(responseData); });
  }

  deleteHrManager(hrManagerUserName:string){
    console.log(hrManagerUserName);
    this.theHRManager=new HRManager(hrManagerUserName);
    console.log(this.theHRManager);
    let responseUrl = this.httpClient.post<HRManager>("http://localhost:9095/hrManager/deleteHRManager",this.theHRManager);
    responseUrl.subscribe((responseData) => {
      this.responseData = responseData;
      console.log(responseData); });
      //this.router.navigate(['/HrDetails'])
     alert("Please refresh this page to see updated data");
  }
  
}

