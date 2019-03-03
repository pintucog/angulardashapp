import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserService} from '../user.service';
import {throwError} from 'rxjs';
import * as Plotly from 'plotly.js/dist/plotly.js';
import {Config, Data, Layout} from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'app-plotarea',
  templateUrl: './plotarea.component.html',
  styleUrls: ['./plotarea.component.css']
})
export class PlotareaComponent implements OnInit {
  public allplot: any;
  public dashfigure: any;

  constructor(private http: HttpClient, private _userService: UserService) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._userService.accesstoken
      })
    };
    if(this._userService.accesstoken !== undefined){
      this.http.get('http://127.0.0.1:8000/dashplot/', httpOptions).subscribe(res =>
        {
          this.allplot = res
          this.allplot.forEach(plot => {
          console.log(plot.plotid);
          this.http.get('http://127.0.0.1:8000/dashfigure?plotid=' + plot.plotid, httpOptions).subscribe(res =>
          {
            this.dashfigure = res
            console.log(res[0].plotid)
            Plotly.newPlot(String(plot.plotid), JSON.parse(res[0].figdata));
          });
        });
      });
    }
  }
}
