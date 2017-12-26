import {combineReducers} from 'redux';
import {CountriesState, countriesInitialState, contriesReducer} from './reducer';

export interface RootState {
	countries: CountriesState;
}

export const rootInitialState: RootState = {
	countries: countriesInitialState
};

export const rootReducer = combineReducers<RootState>({
	countries: contriesReducer
});
