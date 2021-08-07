import * as carTypes from "../types/carTypes";

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