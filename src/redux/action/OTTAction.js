import * as OTTTypes from '../types/OTTTypes';

export const selectOTTAction = (payload) => {
    return {
        type: OTTTypes.SELECT_OTT,
        payload,
    };
};
export const playOTTAction = (payload) => {
    return {
        type: OTTTypes.PLAY_OTT,
        payload,
    };
};
