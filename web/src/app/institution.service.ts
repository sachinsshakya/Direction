import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  readonly baseURL = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getInstitution(id){
    return this.http.post(this.baseURL+ 'inst/get_Inst', id);
  }

  postInstitution(institution){
    return this.http.post(this.baseURL+ 'inst/save' , institution); 
  }
}
