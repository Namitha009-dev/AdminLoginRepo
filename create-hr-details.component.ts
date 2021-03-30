import { Component, OnInit, ViewChild } from '@angular/core';
import { HRManagers } from '../HRManagers';
import { CreateHrDetailsService } from '../create-hr-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hr-details',
  templateUrl: './create-hr-details.component.html',
  styleUrls: ['./create-hr-details.component.css']
})
export class CreateHrDetailsComponent implements OnInit {
  @ViewChild('hrname') hrName;
  @ViewChild('hrUserName') hrUserName;
  @ViewChild('hrPassword') hrPassword;
  theHrManager : HRManagers = new HRManagers();
  responseFromApi: any;
  constructor(private theAddService : CreateHrDetailsService,
    private router:Router) { }
  ngOnInit(): void {
  }
  logout(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  addNewHrManager(){
    let responseDataBack =  this.theAddService.addNewHrManager(this.theHrManager);
      responseDataBack.subscribe((responseData) =>{
        this.responseFromApi = responseDataBack;
        console.log("Result is: " +responseDataBack);
       
      });  
      let proceed = confirm("New HR Details added Successfully..\nClick OK to continue");
     if(proceed){ 
        this.router.navigate(['/loginpage'])
     }
}
}
