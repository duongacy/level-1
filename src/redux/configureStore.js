import { applyMiddleware, combineReducers, createStore } from "redux";
import { FakeBookAppReducer } from "./Reducer/FakeBookAppReducer";

const rootReducer = combineReducers({
    FakeBookAppReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
);
