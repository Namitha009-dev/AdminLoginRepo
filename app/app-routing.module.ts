import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinghrdetailsComponent } from './Components/addinghrdetails/addinghrdetails.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { SkillstrackerComponent } from './Components/skillstracker/skillstracker.component';

const routes: Routes = [
  {path: 'addAssociate', component: SkillstrackerComponent},
  {path: '', redirectTo: 'loginpage', pathMatch: 'full'},
  {path: 'loginpage',   component: LoginpageComponent },
  {path: 'homepage',   component: HomePageComponent},
  {path: 'addNewHrManager',   component: AddinghrdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
