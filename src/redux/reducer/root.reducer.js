import { combineReducers } from "redux";
import { alertReducer } from "./Alert.reducer";
import { authReducer } from "./auth.reducer";
import { categoryReducer } from "./Category.reducer";
import { counterReducer } from "./Counter_Reducer";
import { productReducer } from "./ProductGet.reducer";

export const rootReducer = combineReducers({
    auth :  authReducer,
    alert : alertReducer,
    counter : counterReducer,
    product : productReducer,
    category : categoryReducer
})