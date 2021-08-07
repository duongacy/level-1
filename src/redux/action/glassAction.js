import * as glassTypes from '../types/glassTypes';

export const changeGlassAction = (glassId) => {
    return {
        type: glassTypes.CHANGE_GLASS,
        payload: glassId,
    };
};
