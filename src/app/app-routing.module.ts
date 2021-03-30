import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAssociateComponent } from './search-associate/search-associate.component';
import { UpdateAssociateComponent } from './update-associate/update-associate.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddAssociateComponent } from './add-associate/add-associate.component';
import { UpdateAssociateDetailsComponent } from './update-associate-details/update-associate-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateHrDetailsComponent } from './create-hr-details/create-hr-details.component';

const routes: Routes = [
  {
    path:'search-associate',component:SearchAssociateComponent
  },
  {path: 'loginpage',   component: LoginPageComponent },
  {path: 'addNewHrManager',   component: CreateHrDetailsComponent},
  {
    path:'add-associate',component:AddAssociateComponent
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
    path:'add-skill',component:AddSkillComponent
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
