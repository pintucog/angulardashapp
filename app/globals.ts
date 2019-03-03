import { Injectable } from "@angular/core";


@Injectable()
export class Globals {
	public activeprofile: string;
	public profileid: string;
	public lastvisited: string;
	public dispcolumns: string;
	public profilelist: Array<{profileid: string, lastvisited: string, dispcolumns: string}> = [];
	public dashplotlist: any;
}