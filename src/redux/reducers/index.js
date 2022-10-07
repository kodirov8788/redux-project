import { productReducer } from "./reducers"
import { combineReducers } from "redux"

const reducer = combineReducers({
    allProducts: productReducer,
})
export default reducer
