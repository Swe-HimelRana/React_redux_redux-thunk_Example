import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import productReducer from './services/reducers/productReducer'

export const store = createStore(productReducer, applyMiddleware(thunk))

