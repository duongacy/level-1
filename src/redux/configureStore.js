import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { carReducer } from './reducer/carReducer';
import { glassReducer } from './reducer/glassReducer';
import { ticketReducer } from './reducer/ticketReducer';

const rootReducer = combineReducers({
	carState: carReducer,
	glassState: glassReducer,
	ticketState: ticketReducer
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
