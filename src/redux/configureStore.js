import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { carReducer } from './reducer/carReducer';
import { glassReducer } from './reducer/glassReducer';
import OTTReducer from './reducer/OTTReducer';
import { studentMgtReducer } from './reducer/studentMgtReducer';
import { ticketReducer } from './reducer/ticketReducer';
import todoReducer from './reducer/todoReducer';

const rootReducer = combineReducers({
    carState: carReducer,
    glassState: glassReducer,
    ticketState: ticketReducer,
    OTTState: OTTReducer,
    todoState: todoReducer,
    studentMgtState: studentMgtReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
