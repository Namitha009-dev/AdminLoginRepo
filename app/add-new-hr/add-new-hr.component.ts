import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CreateHrDetailsService } from '../create-hr-details.service';
import { HRManagers } from './HRManagers';

@Component({
  selector: 'app-add-new-hr',
  templateUrl: './add-new-hr.component.html',
  styleUrls: ['./add-new-hr.component.css']
})
export class AddNewHRComponent implements OnInit {
  // @ViewChild('hrname') hrName;
  // @ViewChild('hrUserName') hrUserName;
  // @ViewChild('hrPassword') hrPassword;
  theHrManager : HRManagers=new HRManagers();
  responseData: any;
  constructor(private theAddService : CreateHrDetailsService,
    private router:Router,
    private httpClient : HttpClient) { }
  ngOnInit(): void {
  }
  logout(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  addNewHrManager(){
    console.log(this.theHrManager);
    // let responseDataBack =  this.theAddService.addNewHrManager(this.theHrManager);
    let responseDataBack =  this.httpClient.post<HRManagers>("http://localhost:9090/hrManager/addnew",this.theHrManager);
    console.log("After Function call");
    responseDataBack.subscribe((responseData) =>{
      this.responseData = responseData;
      console.log("Result is: " +this.responseData);
    });  
    let proceed = confirm("New HR Added successfully...");
    if(proceed){ 
      this.router.navigate([`${"HrDetails"}`])
    }
  }
}
