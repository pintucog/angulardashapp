import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../user.service';
import {DataService} from '../data.service';
import {throwError} from 'rxjs';
import { Globals } from '../globals';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public alldataprofile: any;
	public profileid: string;
	public profilelist: Array<{profileid: string}> = [];

  constructor(
    private http: HttpClient,
    private _userService: UserService,
    private _dataService: DataService,
    private _globals: Globals,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this._userService.accesstoken)
    if(this._userService.accesstoken == undefined){
      this.router.navigate(['/login'])
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._userService.accesstoken
      })
    };
    if(this._userService.accesstoken !== undefined){
      console.log(this._globals.profilelist)
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
      console.log(this._globals.profilelist)
    	/*this.http.get('http://127.0.0.1:8000/dataprofile/', httpOptions).subscribe(res => {
    		this.alldataprofile = res
    		this.alldataprofile.forEach(dataprofile =>
    			this.profilelist.push(dataprofile.profileid)
    		)
    		console.log(this.profilelist)
    		console.log(res)	
    	});*/
    }
  }
}
