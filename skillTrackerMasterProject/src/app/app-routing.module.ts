import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssociateComponent } from './components/add-associate/add-associate.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { CreateHrDetailsComponent } from './components/create-hr-details/create-hr-details.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SearchAssociateComponent } from './components/search-associate/search-associate.component';
import { UpdateAssociateDetailsComponent } from './components/update-associate-details/update-associate-details.component';
import { UpdateAssociateComponent } from './components/update-associate/update-associate.component';


const routes: Routes = [
  {
    path:'',component:LoginPageComponent
  },
  {
    path:'create-hr',component:CreateHrDetailsComponent
  },
  {
    path:'add-associate',component:AddAssociateComponent
  },
  {
    path:'search-associate',component:SearchAssociateComponent
  },{
    path:'add-skill',component:AddSkillComponent
  },
  {
    path:'update-associate/:id',component:UpdateAssociateComponent,
    // children:[{
    //   path:'bar-graph/:id',component:BarGraphComponent
    // },{
    //   path:'bar-graph',component:BarGraphComponent
    // }],
  },
  {
    path:'update-details/:id',component:UpdateAssociateDetailsComponent
  },
  {
    path:'bar-graph/:id',component:BarGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
