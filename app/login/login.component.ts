import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {DataService} from '../data.service';
import {throwError} from 'rxjs';
import { Globals } from '../globals';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user: any;
  public onetimecall: boolean;

  constructor(
    private _userService: UserService,
    private _dataService: DataService,
    private _globals: Globals,
    private router: Router
  ) { 
  	console.log("in login comp cons")
  	console.log(_userService)
    this.onetimecall = false
  }

  ngOnInit() {
  	console.log("in login comp ngOnInit set user blank")
    this.user = {
      username: 'admin',
      password: 'admin'
    };
    console.log(this.user)
  }

  loadprofile(){
    if(this.onetimecall == false){
      this.onetimecall = true
      console.log('loadprofile')
      if(this._globals.profilelist == undefined){
        this._globals.profilelist = []
      }
      if(this._globals.profilelist.length == 0){
        console.log('in')
        this._dataService.getalldataprofile().subscribe(data => {
          this._globals.profilelist = data
          console.log(data)
        })
      }
      //return a
    }
    //return null;
  }

  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password});
    /*console.log(this._userService.accesstoken)
    this._dataService.getalldataprofile()
    this._globals.profilelist = this._dataService.profilelist
    console.log(this._globals.profilelist)*/
  }
 
  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }

}
