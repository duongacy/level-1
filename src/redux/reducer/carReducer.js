import { listCar } from '../../data/listCar';
import * as carTypes from '../types/carTypes';

const initialState = {
	colorSelected: 'black',
	wheelSelected: 'wheel-1',
	carSelected: listCar[0],
};

export const carReducer = (state = initialState, action) => {
	switch (action.type) {
		case carTypes.CHANGE_COLOR: {
			const { payload } = action;
			state.colorSelected = payload;
			state.carSelected = listCar.find((item) => item.color === payload);
			break;
		}

		case carTypes.CHANGE_WHEEL:
			state.wheelSelected = action.payload;
		default:
			break;
	}
	return { ...state };
};
