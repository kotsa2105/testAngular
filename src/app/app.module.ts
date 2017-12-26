import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CountriesService } from './services/countries.service';
import { Actions } from './store/actions';
import { HttpModule } from '@angular/http';
import { ReduxStoreModule } from './store/store.module';

import { CountriesComponent } from './components/countries/countries.component';
import { DropdownCountriesComponent } from './components/dropdown-countries/dropdown-countries.component';
import { DropdownRmcComponent } from './components/dropdown-rmc/dropdown-rmc.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
	declarations: [
		AppComponent,
		CountriesComponent,
		DropdownCountriesComponent,
		DropdownRmcComponent,
		PopupComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		ReduxStoreModule
	],
	bootstrap: [AppComponent],
	providers: [
		CountriesService,
		Actions
	]
})
export class AppModule { }
