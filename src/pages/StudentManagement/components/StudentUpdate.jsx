import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup, FormControl, Button, Col } from 'react-bootstrap';
import { getAllStudentAction, updateStudentAction } from '../../../redux/action/studentMgtAction';

const StudentUpdate = () => {
    const dispatch = useDispatch();
    const { studentUpdateInfo, isEdit } = useSelector((root) => root.studentMgtState);
    const [sinhVienInput, setSinhVienInput] = useState(studentUpdateInfo);

    useEffect(() => {
        dispatch(getAllStudentAction());
    }, []);

    useEffect(() => {
        setSinhVienInput(studentUpdateInfo);
    }, [studentUpdateInfo]);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setSinhVienInput({ ...sinhVienInput, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateStudentAction(sinhVienInput, isEdit));
    };
    return (
        <Col lg={7}>
            <h2>{isEdit ? 'Cập nhật sinh viên' : 'Thêm sinh viên'} </h2>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Mã sinh viên</InputGroup.Text>
                <FormControl
                    className=" rounded-0"
                    type="text"
                    name="MaSV"
                    value={sinhVienInput.MaSV}
                    onChange={handleChangeInput}
                    disabled={isEdit}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0  w-25">Họ tên</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="text"
                    name="HoTen"
                    value={sinhVienInput.HoTen}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Email</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="email"
                    name="Email"
                    value={sinhVienInput.Email}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Số điện thoại</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="text"
                    name="SoDT"
                    value={sinhVienInput.SoDT}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Chứng minh thư</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="text"
                    name="CMND"
                    value={sinhVienInput.CMND}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Điểm toán</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="text"
                    name="DiemToan"
                    value={sinhVienInput.DiemToan}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Điểm lý</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="text"
                    name="DiemLy"
                    value={sinhVienInput.DiemLy}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <InputGroup.Text className="rounded-0 w-25">Điểm hóa</InputGroup.Text>
                <FormControl
                    className="rounded-0"
                    type="text"
                    name="DiemHoa"
                    value={sinhVienInput.DiemHoa}
                    onChange={handleChangeInput}
                />
            </InputGroup>
            <InputGroup className="mb-3 rounded-0">
                <Button onClick={handleSubmit} className="w-100 rounded-0">
                    {isEdit ? 'Cập nhật' : 'Thêm'}{' '}
                </Button>
            </InputGroup>
        </Col>
    );
};

export default StudentUpdate;
