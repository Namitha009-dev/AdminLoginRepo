import { Component, OnInit } from '@angular/core';
import { SkillsTrackerService } from '../skills-tracker.service';
import { HttpClient } from '@angular/common/http';
import { Associates } from '../associates';
import { Skills } from '../skills';
import { Router } from '@angular/router';

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

  constructor(private httpClient:HttpClient,private theService:SkillsTrackerService,private router:Router) {
    this.theSkill.push({skill: ""});
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
      alert(responseData.message);
      this.router.navigate(['/search-associate'])
    
    });
  }
  }


}
