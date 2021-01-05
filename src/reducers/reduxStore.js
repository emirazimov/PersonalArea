import { combineReducers, createStore } from "redux";
import InputReducer from "./InputReducer";



const reducers = combineReducers({
  ProductCatalog: InputReducer

})

const store = createStore(reducers)

export default store