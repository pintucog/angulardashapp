import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // http options used for making API calls
  private httpOptions: any;
 
  // the actual JWT token
  public accesstoken: string;

  public refreshtoken: string;
 
  // the token expiration date
  public token_expires: Date;
 
  // the username of the logged in user
  public username: string;
 
  // error messages received from the login attempt
  public errors: any = [];
 
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
// Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
  	console.log(JSON.stringify(user))
    this.http.post('http://127.0.0.1:8000/api/token/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data);
      },
      err => {
        this.errors = err['error'];
      }
    );
    console.log('login end')
  }
 
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post('http://127.0.0.1:8000/api/token/refresh/', JSON.stringify({refresh: this.refreshtoken}), this.httpOptions).subscribe(
      data => {
        this.updateData(data);
      },
      err => {
      	console.log(err)
        this.errors = err['error'];
      }
    );
    console.log('refreshtoken end')
  }
 
  public logout() {
    this.accesstoken = null;
    this.refreshtoken = null;
    this.token_expires = null;
    this.username = null;
  }
 
  private updateData(tokendata) {
    this.accesstoken = tokendata['access'];
    console.log(this.accesstoken)
    if(tokendata['refresh'] !== undefined){
    	this.refreshtoken = tokendata['refresh'];
    	console.log(this.refreshtoken)
    }
    this.errors = [];
 	  console.log('updating token')
    // decode the token to read the username and expiration timestamp
    const token_parts = this.accesstoken.split(/\./);
    console.log(token_parts)
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.user_id;
    console.log(token_decoded)
    console.log(this.username)
  }
}
