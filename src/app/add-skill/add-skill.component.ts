import { Component, OnInit } from '@angular/core';
import { SkillsEntry } from '../search-associate/skillsEntry';
import { SkillsTrackerService } from '../skills-tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  theSkillEntry : SkillsEntry = new SkillsEntry();
  constructor(private theService:SkillsTrackerService,private router:Router) { }

  ngOnInit(): void {
  }


  //adds skills to the skills entry database
  addSkill(){
    let responseDataBack = this.theService.addSkillsInSkillsEntry(this.theSkillEntry);
    responseDataBack.subscribe((responseData)=>
    {
      alert(responseData.message);
      this.router.navigate(['/search-associate']);
    });
  }

}
