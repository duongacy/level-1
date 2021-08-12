import React, { useEffect, useState } from 'react';
import { Card, CloseButton, Button, Col, Container, Row } from 'react-bootstrap';
import {
    doneTaskAction,
    getAllTodoListAction,
    rejectTaskAction,
    deleteTaskAction,
    addTaskAction,
} from '../../redux/action/todoListAction';
import { useDispatch, useSelector } from 'react-redux';

const TodoListPage = () => {
    const [taskName, setTaskName] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        getAllTaskAPI();
    }, []);

    const getAllTaskAPI = () => {
        dispatch(getAllTodoListAction(null));
    };

    const handleDoneTask = (taskName) => {
        dispatch(doneTaskAction(taskName));
    };

    const handleRejectTask = (taskName) => {
        dispatch(rejectTaskAction(taskName));
    };
    const handleDeleteTask = (taskName) => {
        dispatch(deleteTaskAction(taskName));
    };
    const handleAddTask = () => {
        dispatch(addTaskAction(taskName));
    };

    const handleChangeTaskName = (event) => {
        setTaskName(event.target.value);
    };

    const { listTodo, listDone, addError } = useSelector((root) => root.todoListState);

    useEffect(() => {
        console.log(listTodo);
    }, [listTodo]);
    return (
        <Container className="py-5" style={{ flex: 'auto' }}>
            <Row>
                <Col lg={4} className="mx-auto">
                    <Card>
                        <Card.Header>
                            <h2>Task list</h2>
                        </Card.Header>
                        <Card.Body>
                            <h5>Add task</h5>
                            <div className="py-2">
                                <input type="text" onChange={handleChangeTaskName} />
                                <button onClick={handleAddTask}>Add</button>
                                <p>{addError}</p>
                            </div>
                            <h5>Todo</h5>
                            <div className="py-2">
                                {listTodo.map((item, key) => (
                                    <div
                                        key={'todo-' + key}
                                        className="p-1 bg-secondary d-flex justify-content-between mb-1 align-items-center"
                                    >
                                        {item.taskName}
                                        <div className="d-flex  align-items-center px-1">
                                            <Button
                                                className="btn-sm btn-warning rounded-0 "
                                                onClick={() => handleDoneTask(item.taskName)}
                                            >
                                                Done
                                            </Button>
                                            <CloseButton
                                                className="ms-2 bg-danger"
                                                onClick={() => handleDeleteTask(item.taskName)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div className="py-2">
                                <h5>Done</h5>
                                {listDone.map((item, key) => (
                                    <div
                                        key={'done-' + key}
                                        className="p-1 bg-success d-flex justify-content-between mb-1 align-items-center"
                                    >
                                        {item.taskName}
                                        <div className="d-flex align-items-center px-1">
                                            <Button
                                                className="btn-sm btn-warning rounded-0 "
                                                onClick={() => handleRejectTask(item.taskName)}
                                            >
                                                Change status
                                            </Button>
                                            <CloseButton
                                                className="ms-2 bg-danger"
                                                onClick={() => handleDeleteTask(item.taskName)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoListPage;
