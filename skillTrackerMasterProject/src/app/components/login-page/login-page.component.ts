import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { HrLoginService } from 'src/app/services/hr-login.service';
import { Admin } from './admin';
import { HRManagers } from './hrManagers';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  div1:boolean=true;
  div2:boolean=false;
  theHrManager : HRManagers = new HRManagers();
  theAdmin : Admin = new Admin();
  responseFromHrLoginApi: any;
  hrLoginResult:string="";
  responseFromAdminLoginApi: any;
  adminLoginResult:string="";

  constructor(private router:Router,
    private theHrLoginService : HrLoginService,
    private theAdminLoginService : AdminLoginService) { }

  ngOnInit(): void {  }

  ActivateHrLogin(){
    this.div1=true;
    this.div2=false;
    document.getElementById('hrLogindiv').style.backgroundColor='royalblue';
    document.getElementById('adminLogindiv').style.backgroundColor='blanchedalmond';
  }

  ActivateAdminLogin(){
    this.div2=true;
    this.div1=false;
    document.getElementById('adminLogindiv').style.backgroundColor='royalblue';
    document.getElementById('hrLogindiv').style.backgroundColor='blanchedalmond';
  }

  hrManagerLogin(pageName:string):void{
    let responseDataBack =  this.theHrLoginService.hrManagerLogin(this.theHrManager);
      responseDataBack.subscribe((responseData) =>{
      this.responseFromHrLoginApi = responseData;
        console.log(responseData);
        this.hrLoginResult=this.responseFromHrLoginApi.loginResult;
        console.log("Login Result: "+this.hrLoginResult);
        if(this.hrLoginResult=="Login Successful...."){
          this.router.navigate([`${pageName}`])
        }
        else{
          alert("Login Failed due to below Reason:\n"+this.hrLoginResult);
        }
      });
  }

  adminLogin(pageName:string):void{
    let responseDataBack =  this.theAdminLoginService.adminLogin(this.theAdmin);
      responseDataBack.subscribe((responseData) =>{
      this.responseFromAdminLoginApi = responseData;
        console.log(responseData);
        this.adminLoginResult=this.responseFromAdminLoginApi.loginResult;
        console.log("Login Result: "+this.adminLoginResult);
        if(this.adminLoginResult=="Login Successfully"){
          this.router.navigate([`${pageName}`])
        }
        else{
          alert("Login Failed due to below Reason:\n"+this.adminLoginResult);
        }
      });
  }
}