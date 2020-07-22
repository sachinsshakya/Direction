import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    readonly baseURL = 'http://localhost:3000/';
  
    constructor(private http : HttpClient) { }
  
    postUser(userData){
      return this.http.post(this.baseURL+ 'userMgmt/users/register' , userData); 
    }
    getUser() {
      return this.http.get(this.baseURL+'userMgmt/user');
    }
    getUserById(id) {
      return this.http.get(this.baseURL+`userMgmt/user/${id}`);
    }
    updateUser(id,data){
      (id);
       (data);
      return this.http.put(this.baseURL+ `userMgmt/users/updateUser/${id}`,data);
    }
    postElement(elementData){
      return this.http.post(this.baseURL+ 'userMgmt/users/element' , elementData); 
    }
    getElement(){
      return this.http.get(this.baseURL+'userMgmt/element');
    }
    deleteElement(id){
      return this.http.delete(this.baseURL+ `userMgmt/users/deleteElement/${id}`); 
    }
    updateElement(id,data){
       (id);
       (data);
      return this.http.put(this.baseURL+ `userMgmt/users/updateElement/${id}`,data);
    }
    loggedIn(){
      return !!localStorage.getItem('token');
    }
    getToken(){
      return localStorage.getItem('token')
    }
    postMail(data){
      return this.http.post(this.baseURL+ 'send/e-mail' , data); 
    }
    }