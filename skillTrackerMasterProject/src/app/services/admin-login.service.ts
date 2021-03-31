


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../components/login-page/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  constructor(private httpClient : HttpClient) { 
  }
  adminLogin(theAdmin :Admin){
    return this.httpClient.post<Admin>("http://localhost:9091/Admin/login", theAdmin);
   }
}