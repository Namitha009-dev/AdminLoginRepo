import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchAssociateComponent } from './search-associate/search-associate.component';
import { UpdateAssociateComponent } from './update-associate/update-associate.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddAssociateComponent } from './add-associate/add-associate.component';
import { UpdateAssociateDetailsComponent } from './update-associate-details/update-associate-details.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { CreateHrDetailsComponent } from './create-hr-details/create-hr-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAssociateComponent,
    UpdateAssociateComponent,
    BarGraphComponent,
    AddSkillComponent,
    AddAssociateComponent,
    UpdateAssociateDetailsComponent,
    LoginPageComponent,
    
    CreateHrDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
