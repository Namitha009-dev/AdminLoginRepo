import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { SkillstrackerComponent } from './Components/skillstracker/skillstracker.component';
import { SearchAssociateDetailsService } from './Services/search-associate-details.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddinghrdetailsComponent } from './Components/addinghrdetails/addinghrdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginpageComponent,
    SkillstrackerComponent,
    AddinghrdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SearchAssociateDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
