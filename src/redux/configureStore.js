import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { carReducer } from './reducer/carReducer';
import { glassReducer } from './reducer/glassReducer';
import OTTReducer from './reducer/OTTReducer';
import { ticketReducer } from './reducer/ticketReducer';
import { todoListReducer } from './reducer/todoListReducer';

const rootReducer = combineReducers({
    carState: carReducer,
    glassState: glassReducer,
    ticketState: ticketReducer,
    OTTState: OTTReducer,
    todoListState: todoListReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
	composeEnhancers(applyMiddleware(reduxThunk)) 
)
