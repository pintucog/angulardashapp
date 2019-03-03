import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import { Observable, of } from 'rxjs';
import {DataProfileObj} from './globals'

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private httpOptions: any;
	public alldataprofile: any;
	public dashplot: any;
	public dashfigure: any;
	public errors: any;
	public currentuser: string;
	public profileid: string;
	public lastvisited: string;
	public dispcolumns: string;
	public profilelist: Array<{profileid: string, lastvisited: string, dispcolumns: string}> = [];
	public profilelistany: any;

  constructor(private http: HttpClient, private _userService: UserService) {
  }

  public getalldataprofile(): Observable<DataProfileObj[]>{
  	console.log('in getalldataprofile')
  	console.log(this._userService.accesstoken)
  	if(this._userService.accesstoken != undefined){
	  	console.log(this._userService.accesstoken)
	  	this.httpOptions = {
	      headers: new HttpHeaders({
	      	'Content-Type': 'application/json',
	      	'Authorization': 'Bearer ' + this._userService.accesstoken
	      })
	    };
	    this.currentuser = this._userService.username
	    console.log(this.currentuser)
	  	this.http.get<DataProfileObj[]>('http://127.0.0.1:8000/dataprofile/', this.httpOptions).subscribe(
	  		res => {
	  			console.log(res)
	  			this.alldataprofile = res
	  			this.alldataprofile.forEach(dataprofile =>
	    			this.profilelist.push(dataprofile.profileid, dataprofile.lastvisited, dataprofile.dispcolumns)
	    		)
	    		this.profilelistany = this.profilelist
	    		console.log(this.profilelistany)
	  		},
	  		err => {
	    	    this.errors = err['error']
	    	    console.log(err)
	    	    this.alldataprofile = null;
	    	}
	    );
	    console.log(this.profilelistany)
	    return of(this.alldataprofile)
	}
  }

  public getdashplot(profileid): Observable<any[]>{
  	this.http.get('http://127.0.0.1:8000/dashplot?profileid=' + profileid, this.httpOptions).subscribe(
  		res => {
  			this.dashplot = res
  		},
  		err => {
    	    this.errors = err['error']
    	    this.dashplot = null
    	    console.log(err)
    	}
    );
    return of(this.dashplot)
  }

  public getfigure(plotid): Observable<any[]>{
  	this.http.get('http://127.0.0.1:8000/dashfigure?plotid=' + plotid, this.httpOptions).subscribe(
  		res => {
  			this.dashfigure = res
  		},
  		err => {
    	    this.errors = err['error']
    	    this.dashfigure = null
    	    console.log(err)
    	}
    );
    return of(this.dashfigure)
  }

  /*public getcolstat(){
  	this.http.get('http://127.0.0.1:8000/dataprofile/', this.httpOptions).subscribe(
  		res => {
  			return res
  		},
  		err => {
    	    this.errors = err['error']
    	    console.log(err)
    	}
    );
  }*/
}
