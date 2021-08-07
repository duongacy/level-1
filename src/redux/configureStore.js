import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { carReducer } from './reducer/carReducer';
// import { FakeBookAppReducer } from "./Reducer/FakeBookAppReducer";

const rootReducer = combineReducers({
	carState: carReducer,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
