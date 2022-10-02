import * as ActionTypes from "../ActionTypes"


export const getOrderAction = (data) => (dispatch) => {
    console.log("getOrderAction", data);
    dispatch({type : ActionTypes.GET_ORDER_DATA , payload : data})
}