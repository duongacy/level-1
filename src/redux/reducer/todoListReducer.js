import * as todoListTypes from '../types/todoListTypes';

const initialState = {
    listTodo: [],
    listDone: [],
    addError: 'hha',
};

export const todoListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case todoListTypes.GET_ALL_TODO_LIST:
            state.listTodo = payload.filter((item) => item.status === false);
            state.listDone = payload.filter((item) => item.status === true);
            break;
        case todoListTypes.STATUS_CREATE_TODO_LIST:
            console.log("hihi");
            state.addError = payload;
            break;
        default:
            return state;
    }
    return { ...state };
};
