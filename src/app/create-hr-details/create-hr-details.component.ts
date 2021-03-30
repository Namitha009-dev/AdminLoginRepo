import { Component, OnInit } from '@angular/core';
import { HRManagers } from '../HRManagers';
import { CreateHrDetailsService } from '../create-hr-details.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hr-details',
  templateUrl: './create-hr-details.component.html',
  styleUrls: ['./create-hr-details.component.css']
})
export class CreateHrDetailsComponent implements OnInit {

  theHrManager : HRManagers = new HRManagers();
  responseFromApi: any;
  constructor(private theAddService : CreateHrDetailsService,private router:Router,private toastr: ToastrService) { }
  ngOnInit(): void {
  }
  
  addNewHrManager(){
    let responseDataBack =  this.theAddService.addNewHrManager(this.theHrManager);
      responseDataBack.subscribe((responseData) =>{
        
        if(responseData.statusCode==200)
        {
          console.log(responseData);
        this.toastr.success(responseData.addNewHrResult, "Success");
        
        }
        else
        {
          console.log(responseData);
          this.toastr.error(responseData.addNewHrResult, "Error");
        }
        this.router.navigate(['/loginpage']);
        this.responseFromApi = responseDataBack;
        console.log("Result is: " +responseDataBack);
      });
}

}
