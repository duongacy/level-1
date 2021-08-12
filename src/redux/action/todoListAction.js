import * as todoListTypes from '../types/todoListTypes';
import axios from 'axios';

export const getAllTodoListAction = (payload) => {
    return (dispatch) => {
        const promise = axios({
            method: 'GET',
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
        });
        promise.then((rs) => {
            dispatch({ type: todoListTypes.GET_ALL_TODO_LIST, payload: rs.data });
        });
        promise.catch((err) => {
            console.error(err);
            dispatch({
                type: todoListTypes.STATUS_CREATE_TODO_LIST,
                payload: err,
            });
        });
    };
};

export const doneTaskAction = (payload) => {
    return (dispatch) => {
        const promise = axios({
            method: 'PUT',
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllTodoListAction(null));
        });
        promise.catch((err) => console.error(err));
    };
};

export const rejectTaskAction = (payload) => {
    return (dispatch) => {
        const promise = axios({
            method: 'PUT',
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllTodoListAction(null));
        });
        promise.catch((err) => console.error(err));
    };
};

export const deleteTaskAction = (payload) => {
    return (dispatch) => {
        const promise = axios({
            method: 'DELETE',
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllTodoListAction(null));
        });
    };
};

export const addTaskAction = (payload) => {
    const dataPost = {
        taskName: payload,
    };
    return (dispatch) => {
        const promise = axios({
            method: 'POST',
            url: `http://svcy.myclass.vn/api/ToDoList/AddTask`,
            data: dataPost,
        });
        promise.then((rs) => {
            dispatch(getAllTodoListAction(null));
        });
        promise.catch((err) => {
            console.log(err);
        });
    };
};
