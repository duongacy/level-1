import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, InputGroup, FormControl, Button, Row, Table, Col } from 'react-bootstrap';
import {
    getAllStudentAction,
    updateStudentAction,
    deleteStudentAction,
} from '../../redux/action/studentMgtAction';
import StudentList from './components/StudentList';
import StudentUpdate from './components/StudentUpdate';

const StudentManagement = () => {
    return (
        <Container style={{ flex: 'auto' }} className="py-5">
            <Row>
                <StudentList />
                <StudentUpdate />
            </Row>
        </Container>
    );
};

export default StudentManagement;
