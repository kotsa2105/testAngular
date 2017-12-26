import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-dropdown-countries',
	templateUrl: './dropdown-countries.component.html',
	styleUrls: ['./dropdown-countries.component.scss']
})
export class DropdownCountriesComponent implements OnInit {
	@Input() names;
	@Output() searchCountries = new EventEmitter();

	constructor () {}

	find(name) {
		this.searchCountries.emit(name);
	}

	ngOnInit(){}
}
