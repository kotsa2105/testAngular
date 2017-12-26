import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRmcComponent } from './dropdown-rmc.component';

describe('DropdownRmcComponent', () => {
	let component: DropdownRmcComponent;
	let fixture: ComponentFixture<DropdownRmcComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DropdownRmcComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownRmcComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
