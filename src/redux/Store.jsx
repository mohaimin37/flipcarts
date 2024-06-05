import {createStore,combineReducers,applyMiddleware} from "redux"
import{thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { getProductsReducer, getitemreducer,getcartproduct } from "./reducers/Product"
const middleware = [thunk]
const reducer = combineReducers({
getItems:getitemreducer,
getProducts:getProductsReducer,
cartData:getcartproduct


})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

    
)
export default store