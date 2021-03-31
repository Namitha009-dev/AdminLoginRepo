import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociatesService } from 'src/app/services/associates.service';
import { SkillsEntry } from 'src/app/skillsentry';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  flag:boolean=false;
  alertMessage:any;
  theSkillEntry : SkillsEntry = new SkillsEntry();
  constructor(private theService:AssociatesService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  //adds skills to the skills entry database
  addSkill(){
    let responseDataBack = this.theService.addSkillsInSkillsEntry(this.theSkillEntry);
    responseDataBack.subscribe((responseData)=>
    {
   
      //this.toastr.success(responseData.message);
      this.alertMessage=responseData.message;
      this.flag=!this.flag;
      this.router.navigate(['/add-skill']);
    });
  }

}
