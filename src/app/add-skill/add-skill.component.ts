import { Component, OnInit } from '@angular/core';
import { SkillsEntry } from '../search-associate/skillsEntry';
import { SkillsTrackerService } from '../skills-tracker.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  theSkillEntry : SkillsEntry = new SkillsEntry();
  constructor(private theService:SkillsTrackerService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  //adds skills to the skills entry database
  addSkill(){
    let responseDataBack = this.theService.addSkillsInSkillsEntry(this.theSkillEntry);
    responseDataBack.subscribe((responseData)=>
    {
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
