import { Component, OnInit } from '@angular/core';
import { SkilltrackerService } from '../skilltracker.service';
import { Associates } from './associates';
import { Skills } from './skills';

@Component({
  selector: 'app-skillstracker',
  templateUrl: './skillstracker.component.html',
  styleUrls: ['./skillstracker.component.css']
})
export class SkillstrackerComponent implements OnInit {

  selectedSkillName: string;
  butDisabled: boolean = false;
  divs: number[] = [];
  
  theAssociate: Associates = new Associates;
  skill: Skills= new Skills;
  theSkill=[];
  constructor(private theService: SkilltrackerService) {
    this.theSkill.push({skill: ""});
    
  }



  ngOnInit(): void {

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

  // onAssociateSkillNameSelected(val: any) {
  
  //   console.log(val);
  //   this.selectedSkillName = val;
  //   this.butDisabled=false;

  // }
  // onAssociateSkillLevelSelected(val1: any) {
  //   console.log(val1);
  //   this.theAssociate.skills.push({ skillName: this.selectedSkillName, skillLevel: val1 });
  //   console.log(this.theAssociate.skills);
  // }

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
  getAllAssociates() {

    let responseDataBack = this.theService.getAllAssociates();


    responseDataBack.subscribe((responseData) => {
      console.log(responseData);
    });

  }

  addNewAssociate() {
    console.log("kkkk");
    this.theAssociate.skills=this.theSkill;
    console.log(this.theAssociate);

    let responseDataBack = this.theService.addNewAssociate(this.theAssociate);

    responseDataBack.subscribe((responseData) => {
     alert(responseData.message);
    });

  }

  findAssociateById() {
    let responseDataBack = this.theService.findAssociateById(this.theAssociate);


    responseDataBack.subscribe((responseData) => {
      console.log(responseData);
    })
  }

  findAssociateByName() {
    let responseDataBack = this.theService.findAssociateByName(this.theAssociate);


    responseDataBack.subscribe((responseData) => {
      console.log(responseData);
    })
  }

  findAssociateByEmail() {
    let responseDataBack = this.theService.findAssociateByEmail(this.theAssociate);


    responseDataBack.subscribe((responseData) => {
      console.log(responseData);
    })
  }
  findAssociateByMobileNo() {
    let responseDataBack = this.theService.findAssociateByMobileNo(this.theAssociate);


    responseDataBack.subscribe((responseData) => {
      console.log(responseData);
    })
  }
  
  deleteAssociateById() {
    let responseDataBack = this.theService.deleteAssociateById(this.theAssociate);


    responseDataBack.subscribe((responseData) => {
      console.log(responseData.message);
    })
  }
  // viewAllEmployees() {
  // Hit the URL to search User on Git



  //  let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/all");

  //   responseUrl.subscribe((responseData) => {

  //     this.responseDataFromGit = responseData;

  //     console.log(responseData);

  //   });
  // }

  //   let responseUrl = this.httpClient.post("http://localhost:8065/api/associates", {

  //     "associateName": "Aswin",
  //     "associateEmail": "ashwin@gmail.com",
  //     "associateMobileNo": "9133492114",
  //     "skills":[
  //         {
  //             "skillName":"Java",
  //             "skillLevel":"beginner"
  //         },

  //         {
  //             "skillName":"C",
  //             "skillLevel":"beginner"
  //         }

  //     ]
  // } );

  //   responseUrl.subscribe((responseData) => {

  //     this.responseDataFromGit = responseData;

  //     console.log(responseData);

  //   });
  // }

}


