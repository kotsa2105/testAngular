import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

@Injectable()
export class CountriesService {

constructor(private http: Http) {}

	getCountries = (): Observable<any> =>
	this.http.get('assets/data/table.json')
	.map(response => {
		if (response && response.status === 200) {
			return response.json();
		}
	})
	.map(countries => countries)
	.catch(error => {
		console.error('failed to get countries');
		return Observable.throw(error);
	});

	getData = (): Observable<any> =>
	this.http.get('assets/data/data.json')
	.map(response => {
		if (response && response.status === 200) {
			return response.json();
		}
	})
	.map(data => data)
	.catch(error => {
		console.error('failed to get info');
		return Observable.throw(error);
	});

}

