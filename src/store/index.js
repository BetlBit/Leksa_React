import {createStore, combineReducers} from "redux"
import { customerReducer } from "./customerReducer"
import { composeWithDevTools} from "redux-devtools-extension"

const rootReducer = combineReducers({
	customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())