import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-dropdown-rmc',
	templateUrl: './dropdown-rmc.component.html',
	styleUrls: ['./dropdown-rmc.component.scss']
})
export class DropdownRmcComponent implements OnInit {
	rmcTitle: 'RMC';
	@Input() rmcs;
	@Output() searchRMC = new EventEmitter();

	constructor () { }

	find(rmc) {
		this.searchRMC.emit(rmc);
	}

	ngOnInit() { }

}
