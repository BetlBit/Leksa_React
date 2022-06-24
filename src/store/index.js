import {createStore, combineReducers} from "redux"
import { catReducer } from "./catReducer"
import { composeWithDevTools} from "redux-devtools-extension"

const rootReducer = combineReducers({
	cats: catReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())