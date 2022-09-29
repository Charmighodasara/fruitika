import * as ActionTypes from '../ActionTypes'


export const addtoCart = (data)=> (dispatch) =>{
    console.log("addtoCart" , {id:data , quantity : 1});
    dispatch({type: ActionTypes.ADD_TO_CART , payload :{id:data, quantity : 1}})
}