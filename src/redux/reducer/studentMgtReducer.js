import * as studentMgtTypes from '../types/studentMgtTypes';

const initialState = {
    listStudent: [],
    studentUpdateInfo: {//khởi tạo giá trị update cho form
        MaSV: '',
        HoTen: '',
        Email: '',
        SoDT: '',
        CMND: '',
        DiemToan: 0,
        DiemLy: 0,
        DiemHoa: 0,
    },
    isEdit: false, // bình thường hiển thị form add nên cho isEdit=false
};

export const studentMgtReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case studentMgtTypes.GET_ALL_STUDENT:
            state.listStudent = payload;
            break;

        case studentMgtTypes.SET_UPDATE_STUDENT:
            // reducer này dùng chung cho add và edit
            // khi payload truyền vào bằng null thì hiểu là mở form add, nếu có giá trị thì đó là form edit
            if (payload === null) {
                state.studentUpdateInfo = {
                    MaSV: '',
                    HoTen: '',
                    Email: '',
                    SoDT: '',
                    CMND: '',
                    DiemToan: 0,
                    DiemLy: 0,
                    DiemHoa: 0,
                };
                state.isEdit=false;
            } else {
                state.studentUpdateInfo = payload;
                state.isEdit=true;
            }
            break;
        default:
            break;
    }
    return { ...state };
};
