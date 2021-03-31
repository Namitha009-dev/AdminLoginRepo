import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkillsTrackerFrontend';

  showComponent: boolean = true;

  constructor(private router: Router) { }
  ngOnInit(): void {

    // if(localStorage.getItem("loginStatus")=="logged in succesfully"){
    //   this.loginFlag=true;
    //   console.log("hiii");
    // }
  }


  addAssociate() {

    this.router.navigate(['/add-associate']);
    this.showComponent = true;

  }

  logout() {

    this.router.navigate(['/loginpage']);
    this.showComponent = false;
  }

  searchAssociate() {

    this.router.navigate(['/search-associate']);
    this.showComponent = true;
  }

  addSkill() {

    this.router.navigate(['/add-skill']);
    this.showComponent = true;
  }
}



