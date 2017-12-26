import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { Actions } from './store/actions';
import { Country } from './models/countriesModel';
import { CountriesService } from './services/countries.service';
import { NgRedux } from '@angular-redux/store';
import { RootState } from './store/root-reducer';
import { CountriesComponent } from './components/countries/countries.component';
import { PopupComponent } from './components/popup/popup.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
title = 'app';
dataSubscription: Subscription;
countries: Array<Country> = [];
countryNames:Array<any> = [];
countryRMC:Array<any> = [];
currentSearchState: Array<any> = [];
popupInfo;
localService;

//controlling table component in app component
@ViewChild(CountriesComponent)
tableComponent: CountriesComponent;

//controlling popup component in app component
@ViewChild(PopupComponent)
popup: PopupComponent;

constructor (private ngRedux: NgRedux<RootState>, private actions: Actions, private service: CountriesService) {
	this.actions.getCurrentList();

	this.dataSubscription = this.ngRedux.select(state => state.countries).subscribe((data) => {
		this.countries = data.countries;
		this.getCountryNames(data.countries);
		this.getCountryRmc(data.countries);
		this.localService = service;
	});
}

getCountryNames(arrCountries) {
	if(arrCountries.length) {
		let arr = ['All countries'];
		arrCountries.forEach(function(single) {
			if(!arr.includes(single.name)) {
				arr.push(single.name);
			}
		});
		this.countryNames = arr;
	}
}

getCountryRmc(arrCountries) {
	if(arrCountries.length) {
		let arr = ['All RMC'];
		arrCountries.forEach(function(single) {
			arr.push(single.rmc);
		});
		this.countryRMC = arr;
	}
}

searchCountries(country) {
let foundArray = [];

this.countries.forEach(function(item) {
	if (item.name === country) {
		foundArray.push(item);
	};
});

this.searchResult(foundArray);
}

searchRMC(rmc) {
let foundArray = [];

this.countries.forEach(function(item) {
	if (item.rmc === rmc) {
		foundArray.push(item);
	};
});

this.searchResult(foundArray);
}

searchResult(foundArray) {
	if (foundArray.length) {
		this.tableComponent.allCountries = foundArray;
	} else {
		this.tableComponent.allCountries = this.countries;
	}

	this.tableComponent.countryClass = 'default';
	this.tableComponent.quantityClass = 'default';
	this.tableComponent.rmcClass = 'default';
}

sortByName(currentClass) {
	this.tableComponent.quantityClass = 'default';
	this.tableComponent.rmcClass = 'default';

	if (currentClass === 'default') {
		this.currentSearchState = this.tableComponent.allCountries;

		this.tableComponent.allCountries = this.tableComponent.allCountries.map(value => value).sort(function(a, b) {
			if (a.name > b.name) {
				return 1;
			} else if (a.name < b.name) {
				return -1;
			} else {
				return 0;
			}
		});
		this.tableComponent.countryClass = 'a-to-z';

	} else if (currentClass === 'a-to-z') {
		this.tableComponent.allCountries.reverse();
		this.tableComponent.countryClass = 'z-to-a';
	} else {
		this.tableComponent.allCountries = this.currentSearchState;
		this.tableComponent.countryClass = 'default';
	}
}

sortByQuantity(currentClass) {
	this.tableComponent.countryClass = 'default';
	this.tableComponent.rmcClass = 'default';

	if (currentClass === 'default') {
		this.currentSearchState = this.tableComponent.allCountries;

		this.tableComponent.allCountries = this.tableComponent.allCountries.map(value => value).sort(function(a, b) {
			if (parseInt(a.quantity) > parseInt(b.quantity)) {
				return 1;
			} else {
				return -1;
			};
		});
		this.tableComponent.quantityClass = 'a-to-z';

	} else if (currentClass === 'a-to-z') {
		this.tableComponent.allCountries.reverse();
		this.tableComponent.quantityClass = 'z-to-a';
	} else {
		this.tableComponent.allCountries = this.currentSearchState;
		this.tableComponent.quantityClass = 'default';
	}
}

sortByRMC(currentClass) {
	this.tableComponent.countryClass = 'default';
	this.tableComponent.quantityClass = 'default';

	if (currentClass === 'default') {
		this.currentSearchState = this.tableComponent.allCountries;

		this.tableComponent.allCountries = this.tableComponent.allCountries.map(value => value).sort(function(a, b) {
			if (parseInt(a.rmc.slice(1)) > parseInt(b.rmc.slice(1))) {
				return 1;
			} else {
				return -1;
			};
		});
		this.tableComponent.rmcClass = 'a-to-z';

	} else if (currentClass === 'a-to-z') {
		this.tableComponent.allCountries.reverse();
		this.tableComponent.rmcClass = 'z-to-a';
	} else {
		this.tableComponent.allCountries = this.currentSearchState;
		this.tableComponent.rmcClass = 'default';
	}
}

showPopup(item) {
	this.localService.getData().subscribe(data => {
		this.popupInfo = data;
		this.popupInfo.item = item;
	});
}

hidePopup() {
	this.popupInfo = null;
}

ngOnInit(){ }

}
