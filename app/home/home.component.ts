import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../user.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public alldataprofile: any;
	public profileid: string;
	public profilelist: Array<{profileid: string}> = [];

  constructor(private http: HttpClient, private _userService: UserService) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._userService.accesstoken
      })
    };
    if(this._userService.accesstoken !== undefined){
    	this.http.get('http://127.0.0.1:8000/dataprofile/', httpOptions).subscribe(res => {
    		this.alldataprofile = res
    		this.alldataprofile.forEach(dataprofile =>
    			this.profilelist.push(dataprofile.profileid)
    		)
    		console.log(this.profilelist)
    		console.log(res)
    	});
    }
  }
}
