import * as todoTypes from '../types/todoTypes';
import axios from 'axios';

export const getAllTodoAction = () => {
    return (dispatch) => {
        // xu ly logic
        const promise = axios({
            method: 'GET',
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
        });
        promise.then((rs) => {
            dispatch({
                type: todoTypes.GET_ALL_TODO_LIST,
                payload: rs.data,
            });
        });
    };
};

export const addTodoAction = (payload) => {
    console.log('addTodoAction');
    // xu ly logic, sau do call lai ham getAllTodoListAction
    const dataAdd = {
        taskName: payload,
    };
    console.log('data add: ', dataAdd);
    return (dispatch) => {
        const promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: dataAdd,
        });
        promise.then((rs) => {
            dispatch(getAllTodoAction());
        });
    };
};

export const doneTodoAction = (payload) => {
    console.log('doneTodoAction', payload);
    // xu ly logic, sau do call lai ham getAllTodoListAction
    return (dispatch) => {
        const promise = axios({
            method: 'PUT',
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllTodoAction());
        });
    };
};
export const rejectTodoAction = (payload) => {
    console.log('rejectTodoAction');
    // xu ly logic, sau do call lai ham getAllTodoListAction
    return (dispatch) => {
        const promise = axios({
            method: 'PUT',
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllTodoAction());
        });
    };
};

export const deleteTodoAction = (payload) => {
    console.log('deleteTodoAction');
    return (dispatch) => {
        const promise = axios({
            method: 'DELETE',
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllTodoAction());
        });
    };
};
