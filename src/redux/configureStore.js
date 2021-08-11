import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { carReducer } from './reducer/carReducer';
import { glassReducer } from './reducer/glassReducer';
import OTTReducer from './reducer/OTTReducer';
import { ticketReducer } from './reducer/ticketReducer';

const rootReducer = combineReducers({
	carState: carReducer,
	glassState: glassReducer,
	ticketState: ticketReducer,
	OTTState: OTTReducer
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
