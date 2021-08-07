import * as ticketTypes from '../types/ticketTypes';

export const chonGheAction = (soGhe)=>{
    return {
        type: ticketTypes.CHON_GHE,
        payload: soGhe
    }
}