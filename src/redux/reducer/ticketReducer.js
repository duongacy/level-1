import { ticketData } from '../../data/bookTicket/ticketData';
import * as ticketTypes from '../types/ticketTypes';

const initialState = {
    ticketList: ticketData,
    selectedList: [],
};

export const ticketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ticketTypes.CHON_GHE:
            let gheFind = state.ticketList.find((ghe) => ghe.soGhe === payload);
            gheFind.trangThai !== 'DA_CHON'
                ? (gheFind.trangThai = 'DA_CHON')
                : (gheFind.trangThai = 'TRONG');

            const selectedFilter = state.ticketList.filter((ghe) => ghe.trangThai === 'DA_CHON');
            state.selectedList = selectedFilter;
    }

    return { ...state };
};
