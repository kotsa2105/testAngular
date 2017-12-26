import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCountriesComponent } from './dropdown-countries.component';

describe('DropdownCountriesComponent', () => {
	let component: DropdownCountriesComponent;
	let fixture: ComponentFixture<DropdownCountriesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DropdownCountriesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownCountriesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
