import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CountriesService } from '../services/countries.service';
import { RootState } from './root-reducer';

@Injectable()

export class Actions {
	static readonly LOADED_COUNTRIES = 'LOADED_COUNTRIES';

	constructor(private ngRedux: NgRedux<RootState>, private service: CountriesService) {}

	getCurrentList() {
		this.service.getCountries().subscribe(countries => {
			this.ngRedux.dispatch({type: Actions.LOADED_COUNTRIES, payload: countries});
		});
	}
}
