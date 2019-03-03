import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user: any;

  constructor(private _userService: UserService) { 
  	console.log("in login comp cons")
  	console.log(_userService)
  }

  ngOnInit() {
  	console.log("in login comp ngOnInit set user blank")
    this.user = {
      username: 'admin',
      password: 'admin'
    };
    console.log(this.user)
    console.log(this.user.username)
  }

  login() {
  	console.log(this.user.username)
  	console.log(this.user.password)
    this._userService.login({'username': this.user.username, 'password': this.user.password});
  }
 
  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }

}
