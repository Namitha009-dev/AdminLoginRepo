import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../Components/skillstracker/Associates';

@Injectable({
  providedIn: 'root'
})
export class SearchAssociateDetailsService {
  constructor(private httpClient: HttpClient) { }


  searchForAll()
  {
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/all");
  }
  }
  