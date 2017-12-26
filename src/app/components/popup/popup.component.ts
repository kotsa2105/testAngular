import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
	@Input() info;
	@Output() hidePopup = new EventEmitter();

	constructor() { }

	hide() {
		this.hidePopup.emit();
	}

	ngOnInit() {
	}

}