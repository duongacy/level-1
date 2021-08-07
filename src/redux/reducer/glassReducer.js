import { glassData } from '../../data/glass/glassData';
import * as glassTypes from '../types/glassTypes';

const initialState = {
    glassSelected: glassData[0],
    glassData : glassData
};

export const glassReducer = (state = initialState, action) => {
    switch (action.type) {
        case glassTypes.CHANGE_GLASS: {
            const { payload } = action;
            const newGlass = glassData.find((glass) => glass.id === payload);
            state.glassSelected = newGlass;
            break;
        }
        default:
            break;
    }
    return { ...state };
};
