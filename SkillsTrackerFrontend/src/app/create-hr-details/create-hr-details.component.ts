import { Component, OnInit } from '@angular/core';
import { HRManagers } from '../HRManagers';
import { CreateHrDetailsService } from '../create-hr-details.service';

@Component({
  selector: 'app-create-hr-details',
  templateUrl: './create-hr-details.component.html',
  styleUrls: ['./create-hr-details.component.css']
})
export class CreateHrDetailsComponent implements OnInit {

  theHrManager : HRManagers = new HRManagers();
  responseFromApi: any;
  constructor(private theAddService : CreateHrDetailsService) { }
  ngOnInit(): void {
  }
  
  addNewHrManager(){
    let responseDataBack =  this.theAddService.addNewHrManager(this.theHrManager);
      responseDataBack.subscribe((responseData) =>{
        this.responseFromApi = responseDataBack;
        console.log("Result is: " +responseDataBack);
      });
}

}
