import { Component, OnInit } from '@angular/core';
import { AddinghrdetailsService } from 'src/app/Services/addinghrdetails.service';
import { HRManagers } from './HRManagers';

@Component({
  selector: 'app-addinghrdetails',
  templateUrl: './addinghrdetails.component.html',
  styleUrls: ['./addinghrdetails.component.css']
})
export class AddinghrdetailsComponent implements OnInit {
  theHrManager : HRManagers = new HRManagers();
  responseFromApi: any;
  constructor(private theAddService : AddinghrdetailsService) { }
  ngOnInit(): void {
  }
  
  addNewHrManager(){
    let responseDataBack =  this.theAddService.addNewHrManager(this.theHrManager);
      responseDataBack.subscribe((responseData) =>{
        this.responseFromApi = responseDataBack;
        console.log("Result is: " +responseDataBack);
        alert("New HR Details Successfully");
      });
}

}

  
