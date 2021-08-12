import * as todoTypes from '../types/todoTypes';

const initialState = {
    todoList: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case todoTypes.GET_ALL_TODO_LIST:
            // khi thằng action dispatch vào được cái này thì mình lượm được cái payload nó trả về là 1 list data
            state.todoList = payload;
            break;
        default:
            return state;
    }

    return { ...state };
};
