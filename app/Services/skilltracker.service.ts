import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../Components/skillstracker/Associates';

@Injectable({
  providedIn: 'root'
})
export class SkilltrackerService {
  constructor(private httpClient: HttpClient) { }

  getAllAssociates()
  {
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/all");
  }
  
  
  addNewAssociate(theAssociate){
    return this.httpClient.post<Associates>("http://localhost:8065/api/associates",theAssociate);
  }
  
  findAssociateById(theAssociate){
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/associateId/"+theAssociate.associateId);
  }
  
  findAssociateByName(theAssociate)
  {
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/associateName/"+theAssociate.associateName);
  }
  findAssociateByEmail(theAssociate)
  {
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/associateEmail/"+theAssociate.associateEmail);
  }
  findAssociateByMobileNo(theAssociate)
  {
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/associateMobileNo/"+theAssociate.associateMobileNo);
  }
  findAssociateBySkill(skillName)
  {
    return this.httpClient.get<Associates>("http://localhost:8065/api/associates/skillName/"+skillName);
  }
  deleteAssociateById(theAssociate)
  {
    return this.httpClient.delete<Associates>("http://localhost:8065/api/associates/"+theAssociate.associateId);
  }
  
  
  }
  