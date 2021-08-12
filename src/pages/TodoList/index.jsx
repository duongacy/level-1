import React, { useEffect, useState } from 'react';
import { Card, CloseButton, Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllTodoAction,
    addTodoAction,
    doneTodoAction,
    rejectTodoAction,
    deleteTodoAction,
} from '../../redux/action/todoAction';

const TodoListPage = () => {
    const [taskNameInput, setTaskNameInput] = useState(''); // khởi tạo biến này để lấy name thêm 1 task mới
    const { todoList } = useSelector((root) => root.todoState);
    const todoTask = todoList.filter((item) => item.status === false);
    const doneTask = todoList.filter((item) => item.status === true);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodoAction());
    }, []);

    const handleAdd = () => {
        dispatch(addTodoAction(taskNameInput));//taskNameInput này chính là state trên kia nha, nó đã được thay đổi khi ô input thay đổi giá trị
    };
    const handleDone = (taskName) => {
        dispatch(doneTodoAction(taskName)); // mỗi lần ấn button done là dispatch ngay cái action để xử lý 
    };
    const handleReject = (taskName) => {
        dispatch(rejectTodoAction(taskName));
    };
    const handleDelete = (taskName) => {
        dispatch(deleteTodoAction(taskName));
    };

    const handleChangeTaskName = (event) => {
        setTaskNameInput(event.target.value); // khi thay đổi cái ô input thì mình set lại state này
    };
    return (
        <Container className="py-5" style={{ flex: 'auto' }}>
            <div>
                <div>
                    <input type="text" onChange={handleChangeTaskName} />
                    <button onClick={handleAdd}>add</button>
                </div>
                <h3>Todo list</h3>
                {todoTask.map((item, key) => (
                    <div className="border d-flex justify-content-between" key={'todo-' + key}>
                        {item.taskName}
                        <div>
                            <button onClick={() => handleDone(item.taskName)}>Done</button>
                            <button onClick={() => handleDelete(item.taskName)}>delete</button>
                        </div>
                    </div>
                ))}

                <hr />
                <h3>Done list</h3>
                {doneTask.map((item, key) => (
                    <div className="border d-flex justify-content-between" key={'done-' + key}>
                        {item.taskName}
                        <div>
                            <button onClick={() => handleReject(item.taskName)}>Reject</button>
                            <button onClick={() => handleDelete(item.taskName)}>delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default TodoListPage;
