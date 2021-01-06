import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isAdmin:boolean;

  // getAdmin(){
  //   return this.isAdmin;
  // }

  constructor(private http:HttpClient) { }

  newUser(user){
    return this.http.post("http://localhost:5000/register",user)
    
  }

  loginUser(user){
    console.log(user)
    return this.http.post<any>("http://localhost:5000/login",user)
    
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getAdmin(){
    return !!localStorage.getItem('isAdmin')
  }

}
