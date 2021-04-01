import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EdithrdetailsserviceService } from '../edithrdetailsservice.service';
import { EditHrManagers } from './EditHrManagers';

@Component({
  selector: 'app-edithrdetails',
  templateUrl: './edithrdetails.component.html',
  styleUrls: ['./edithrdetails.component.css']
})
export class EdithrdetailsComponent implements OnInit {
  theHrManager : any;
  responseFromApi: any;
  hrManagerId : any;
  constructor(private route: ActivatedRoute,
    private theAddService : EdithrdetailsserviceService,
    private httpClient:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.hrManagerId = params.get('id');
      console.log(this.hrManagerId);
    });
    this.hrManagerFormEditableContent();
  }
  editHrManager(){
    let responseDataBack =  this.theAddService.editHrManager(this.theHrManager);
      responseDataBack.subscribe((responseData) =>{
        this.responseFromApi = responseDataBack;
        console.log("Result is: " +responseDataBack);
        alert("HR Details updated successfully");
        this.router.navigate(['/HrDetails']);
      });
}
hrManagerFormEditableContent(){

  //gets details based on associate id 
  let responseDataBack = this.httpClient.get("http://localhost:9095/hrManager/getHrManagerByUserName/"+this.hrManagerId);
  responseDataBack.subscribe((responseData)=>
  {
    this.theHrManager = responseData;
    console.log(responseData);
  });
}

display(userName : any){
  console.log("Welcome " + userName.toString());
}

}