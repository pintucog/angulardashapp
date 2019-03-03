import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component'

@Component({
  selector: 'app-busrulz',
  templateUrl: './busrulz.component.html',
  styleUrls: ['./busrulz.component.css']
})
export class BusrulzComponent implements OnInit {

  constructor(private _homecomp: HomeComponent) { }

  ngOnInit() {
  }

}
