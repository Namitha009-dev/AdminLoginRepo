import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrLoginService } from '../hr-login.service';
import { HRManagers } from './HRManagers';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
    div1:boolean=true;
    div2:boolean=false;
    theHrManager : HRManagers = new HRManagers();
    responseFromApi: any;
    LoginResult:string="";

    constructor(private router:Router,
      private theAddService : HrLoginService) { }

    ngOnInit(): void {  }

    ActivateHrLogin(){
      this.div1=true;
      this.div2=false;
      document.getElementById('hrLogindiv').style.backgroundColor='blanchedalmond';
      document.getElementById('adminLogindiv').style.backgroundColor='royalblue';
    }

    ActivateAdminLogin(){
      this.div2=true;
      this.div1=false;
      document.getElementById('adminLogindiv').style.backgroundColor='blanchedalmond';
      document.getElementById('hrLogindiv').style.backgroundColor='royalblue';
    }

    hrManagerLogin(pageName:string):void{
      let responseDataBack =  this.theAddService.hrManagerLogin(this.theHrManager);
        responseDataBack.subscribe((responseData) =>{
        this.responseFromApi = responseData;
          console.log(responseData);
          this.LoginResult=this.responseFromApi.loginResult;
          console.log("Login Result: "+this.LoginResult);
        });
        if(this.LoginResult=="Login Successful...."){
          this.router.navigate([`${pageName}`])
        }
        else{
          alert("Login Failed due to below Reason:\n"+this.LoginResult);
        }
    }
}
