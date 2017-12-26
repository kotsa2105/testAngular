import {updatedModelWithValues} from '../utils/common.utils';

export class Country {
	name: any;
	quantity: any;
	rmc: any;

	constructor(data?: any) {
		updatedModelWithValues(this, data);
	}
}
