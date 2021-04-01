import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SkillsTrackerService } from '../skills-tracker.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-associate-details',
  templateUrl: './update-associate-details.component.html',
  styleUrls: ['./update-associate-details.component.css']
})
export class UpdateAssociateDetailsComponent implements OnInit {

  selectedSkillName: string;
  butDisabled: boolean = false;
  divs: number[] = [];

  theAssociate: any;
  skill: Skills= new Skills;
  theSkill=[];
  responseDetails: any;
  associateId:any;
  constructor(private route:ActivatedRoute,private httpClient:HttpClient,private toastr: ToastrService, private theService:SkillsTrackerService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.associateId = params.get('id');
      console.log(this.associateId);
    });
    this.associateFormEditableContent();

    //get skills from skills entry database to add skills in combobox
    let responseDataBack = this.httpClient.get("http://localhost:8065/api/associates/skillentry");
    responseDataBack.subscribe((responseData)=>
    {
      console.log(responseData);
      console.log(responseData[0]);
      this.responseDetails = responseData;
    });

  }
  associateFormEditableContent(){

    //gets details based on associate id 
    let responseDataBack = this.httpClient.get("http://localhost:8065/api/associates/associateId/"+this.associateId);
    responseDataBack.subscribe((responseData)=>
    {
      this.theAssociate = responseData;
      console.log(responseData);
      this.theSkill = this.theAssociate.skills;
    });
  }
  
  editForm(){
    console.log(this.theAssociate.associateName);
  }
  onKey(Event:any){
    console.log(Event);
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

  responseData:any;
  //updates associate details based on associate Id
  updateAssociate(){
    let proceed = confirm("do you want to update??");
    if(proceed){
    let responseDataBack = this.theService.updateAssociate(this.theAssociate.associateId, this.theAssociate);
    responseDataBack.subscribe((responseData)=>{
      this.responseData = responseData;
      if(responseData.statusCode==200)
      {
        console.log(responseData);
      this.toastr.success(responseData.message, "Success");
      }
      else
      {
        console.log(responseData);
        this.toastr.error(responseData.message, "Error");
      }
      this.router.navigate(['/search-associate']);
    });
  }

  }

  deleteAssociate(){
    let proceed = confirm("do you want to delete?");
    if(proceed){
    let responseDataBack = this.theService.deleteEmployee(this.theAssociate.associateId);
    responseDataBack.subscribe((responseData)=>
    {
      this.responseData = responseData;
      if(this.responseData.statusCode==200)
      {
        this.toastr.success(this.responseData.message, "Success");
      }
      else{
        this.toastr.error(this.responseData.message, "Error");
      }
      this.router.navigate(['search-associate']);
      
    });
  }
}


}
