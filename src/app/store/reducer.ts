import {Country} from '../models/countriesModel';
import {Actions} from './actions';

export interface CountriesState {
	countries: Array<any>;
}

export const countriesInitialState: CountriesState = {
	countries: []
};

export const contriesReducer = (state: CountriesState = countriesInitialState, action): CountriesState => {
	switch (action.type) {
		case Actions.LOADED_COUNTRIES:
		return {
			...state,
			countries: action.payload
		}
	}

	return state;
}
