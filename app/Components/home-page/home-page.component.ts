import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchAssociateDetailsService } from 'src/app/Services/search-associate-details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchValue : string;
  responseDataById :  any;
  responseData :  any;
  searchOption:string;
  constructor(private httpClient : HttpClient,
    private router:Router,
    private theService: SearchAssociateDetailsService) { 

  }
  goTo(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  ngOnInit() {  }
  displaySearchOption(searchOption : any){
    this.searchOption = searchOption.value;
  }
  displaySearchValue(searchValue : any){
    this.searchValue = searchValue.value;
  }
  
  searchForUser(){
    if(this.searchOption == "associateId"){
      let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/associateId/" + this.searchValue);
      responseUrl.subscribe((responseDataById) => {
      this.responseDataById = responseDataById;
      this.responseData=null;
      console.log(responseDataById); });
    }else{
      let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/"+
      this.searchOption + "/" + this.searchValue);
      responseUrl.subscribe((responseData) => {
      this.responseData = responseData;
      console.log(responseData); });
      }
  }
  searchForAll(){
     let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/all");
    responseUrl.subscribe((responseData) => {
    this.responseData = responseData;
    console.log(responseData);  
    });
  }
  displayCard(){
    console.log("Card was clicked");
  }
}
