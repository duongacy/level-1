import * as studentMgtTypes from '../types/studentMgtTypes';
import axios from 'axios';

export const getAllStudentAction = () => {
    return (dispatch) => {
        const promise = axios({
            method: 'GET',
            url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
        });
        promise.then((rs) => {
            dispatch({
                type: studentMgtTypes.GET_ALL_STUDENT,
                payload: rs.data,
            });
        });
    };
};

export const updateStudentAction = (payload, isEdit) => {
    return (dispatch) => {
        let promise;
        if (isEdit) {
            promise = axios({
                method: 'PUT',
                url: 'http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien',
                data: payload,
            });
        } else {
            promise = axios({
                method: 'POST',
                url: 'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
                data: payload,
            });
        }

        promise.then((rs) => {
            dispatch(getAllStudentAction());
        });
        promise.catch((err) => {
            console.error(err);
        });
    };
};
export const deleteStudentAction = (payload) => {
    return (dispatch) => {
        const promise = axios({
            method: 'DELETE',
            url: `http://svcy.myclass.vn/api/SinhVien/XoaSinhVien?id=${payload}`,
        });
        promise.then((rs) => {
            dispatch(getAllStudentAction());
        });
    };
};

export const setEditStudentAction=(editInfo)=>{
    return {
        type: studentMgtTypes.SET_UPDATE_STUDENT,
        payload: editInfo
    }
}