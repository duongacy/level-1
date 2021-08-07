import { ADD_COMMENT } from "../types/carTypes";
import * as carTypes from "../types/carTypes";

export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: userComment
    }
}

export const changeColor=(color)=>{
    return {
        type: carTypes.CHANGE_COLOR,
        payload: color
    }
}
export const changeWheelAct=(wheel)=>{
    return {
        type: carTypes.CHANGE_WHEEL,
        payload: wheel
    }
}