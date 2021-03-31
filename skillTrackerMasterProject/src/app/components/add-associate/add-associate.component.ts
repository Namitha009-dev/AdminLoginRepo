import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Associates } from 'src/app/associates';
import { AssociatesService } from 'src/app/services/associates.service';
import { Skills } from 'src/app/skills';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.css']
})

export class AddAssociateComponent implements OnInit {

  selectedSkillName: string;
  butDisabled: boolean = false;
  divs: number[] = [];

  theAssociate: Associates = new Associates();
  skill: Skills= new Skills;
  theSkill=[];
  responseDetails: any;
  alertMessage:any;
  flag:boolean;

  constructor(private httpClient:HttpClient,private theService:AssociatesService,private router:Router,private toastr:ToastrService) {
    this.theSkill.push({skill: ""});
    this.flag=true;
   }

  ngOnInit(): void {

    //for creating skills in combo box which is obtained from skills entry database
    
    let responseDataBack = this.httpClient.get("http://localhost:8065/api/associates/skillentry");
    responseDataBack.subscribe((responseData)=>
    {
      console.log(responseData);
      console.log(responseData[0]);
      this.responseDetails = responseData;
      console.log(this.responseDetails[0]);
      

    });

  }
  display(val: any) {
    console.log("Welcome " + val.toString());

  }
  removeValue(i){
    if(i!=0)
    {
    this.theSkill.splice(i,1);
    }
  }

  addvalue(){
    this.theSkill.push({skill: ""});
  }

  createDiv(): void {
    console.log("hjkkk");
    
    this.divs.push(this.divs.length);
  }

  removeDiv():void {
    this.divs.pop();
  }

  test()
  {
    console.log(this.theSkill.push(this.skill));
  }

  addNewAssociate() {
    this.theAssociate.skills=this.theSkill;
    console.log(this.theAssociate);

    let proceed = confirm("do you want to contiue?");
     if(proceed){
     
       
     
    let responseDataBack = this.theService.addNewAssociate(this.theAssociate);

    responseDataBack.subscribe((responseData) => {
      //alert(responseData.message);
     // this.toastr.success(responseData.message);
     this.alertMessage=responseData.message;
     this.flag=!this.flag;
      this.router.navigate(['/add-associate'])
    
    });
  }
  }


}
