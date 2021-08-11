import * as OTTTypes from '../types/OTTTypes';

const OTTList = [
    {
        OTTId: 0,
        name: '',
        img: '',
    },
    {
        OTTId: 1,
        name: 'Keo',
        img: 'images/OTT/keo.png',
    },
    {
        OTTId: 2,
        name: 'Bua',
        img: 'images/OTT/bua.png',
    },
    {
        OTTId: 3,
        name: 'Bao',
        img: 'images/OTT/bao.png',
    },
];
const initialState = {
    computerSelected: OTTList[0],
    playerSelected: OTTList[0],
    result: '',
    match: 0,
    win: 0,
};

function getRandomOTT(min, max) {
    //hàm này để random ra cái index cho kéo, búa hoặc bao, chỉ cần quan tâm đến đầu ra là 1 cái index
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}

const handleResult = (a, b) => {
    if (a === b) {
        return 'hoa';
    } else if (a === b - 1 || a === b + 2) {
        return 'thua';
    } else {
        return 'thang';
    }
    // đưa vào 2 cái index để xử lý thắng hòa hoặc thua, rảnh thì xem thử tại sao nó output đúng
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OTTTypes.SELECT_OTT://người chơi
            //khi select kéo, búa, bao, sẽ lấy được payload là cái id
            let OTTFind = OTTList.find((item) => item.OTTId === action.payload); //query id
            state.computerSelected = OTTList[0]; // reset lại state này
            state.playerSelected = OTTFind; //set state computerSelected
            break;

        case OTTTypes.PLAY_OTT: { //máy chơi
            if (state.playerSelected.OTTId === 0) { // đây là trường hơp người dùng chưa chọn kéo búa bao
                alert('vui long chon');
                break;
            }
            const idRandom = getRandomOTT(1, 3); //nếu người dùng đã chọn rồi, thì mình cho máy random
            let OTTFind = OTTList.find((item) => item.OTTId === idRandom);//random được cái id rồi thì set state thôi
            state.computerSelected = OTTFind;

            const result = handleResult(state.playerSelected.OTTId, state.computerSelected.OTTId);
            state.match += 1; // sau mỗi lần play thì tăng số trận lên +1
            if (result === 'thang') {
                state.win += 1; // nếu thắng thì tăng số trận thắng lên +1
            }
            state.result = result; //set state cho result, để hiển thị lên bảng kết quả
            break;
        }
        default:
            return state;
    }
    return { ...state };
};
