import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-countries',
	templateUrl: './countries.component.html',
	styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
	title = 'Countries';
	countryClass = 'default';
	quantityClass = 'default';
	rmcClass = 'default';
	@Input() allCountries;
	@Output() sortCountries = new EventEmitter();
	@Output() sortQuantities = new EventEmitter();
	@Output() sortRMC = new EventEmitter();
	@Output() showInfo = new EventEmitter();

	constructor () { }

	sortByName() {
		this.sortCountries.emit(this.countryClass);
	}

	sortByQuantity() {
		this.sortQuantities.emit(this.quantityClass);
	}

	sortByRMC() {
		this.sortRMC.emit(this.rmcClass);
	}

	showPopup(item) {
		this.showInfo.emit(item);
	}

	ngOnInit() {
	}
}
