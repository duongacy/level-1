import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Col } from 'react-bootstrap';
import {
    getAllStudentAction,
    deleteStudentAction,
    setEditStudentAction,
} from '../../../redux/action/studentMgtAction';

const StudentList = () => {
    const dispatch = useDispatch();
    const { listStudent } = useSelector((root) => root.studentMgtState);
    useEffect(() => {
        dispatch(getAllStudentAction());
    }, []);
    const handleAdd = () => {
        dispatch(setEditStudentAction(null));
    };
    const handleEdit = (student) => {
        dispatch(setEditStudentAction(student));
    };
    const handleDelete = (MaSV) => {
        dispatch(deleteStudentAction(MaSV));
    };

    return (
        <Col lg={5}>
            <h2>Danh sách sinh viên </h2>
            <Table>
                <thead>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>
                            <Button
                                variant="primary"
                                className="btn-sm rounded-0 me-2 w-100"
                                onClick={handleAdd}
                            >
                                Thêm
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listStudent.map((student, key) => (
                        <tr key={'student-list' + key}>
                            <td>{student.MaSV}</td>
                            <td>{student.HoTen}</td>
                            <td>{student.Email}</td>
                            <td className="d-flex justify-content-between">
                                <Button
                                    variant="danger"
                                    className="btn-sm rounded-0 me-2"
                                    onClick={() => handleDelete(student.MaSV)}
                                    style={{ flex: 'auto' }}
                                >
                                    Xóa
                                </Button>
                                <Button
                                    variant="warning"
                                    className="btn-sm rounded-0"
                                    onClick={() => handleEdit(student)}
                                    style={{ flex: 'auto' }}
                                >
                                    Sửa
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    );
};

export default StudentList;
