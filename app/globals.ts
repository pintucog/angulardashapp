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

export class DataProfileObj {
	profileid: string;
	lastmodified: string;
	lastvisited: string;
	dispcolumns: string;
	totalrecord: number;
	duprecord: number;
	datasize: number;
	totalblank: number;
	totalcol: number;
	blankcol: string;
}