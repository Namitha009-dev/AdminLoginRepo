import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminLoginService } from '../admin-login.service';
import { HRManagers } from '../HRManagers';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  theAdmin : Admin = new Admin();
  responseFromAdminLoginApi: any;
  adminLoginResult:string="";
  constructor(private router:Router,
    private theAdminLoginService : AdminLoginService) { }

  ngOnInit(): void {
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
