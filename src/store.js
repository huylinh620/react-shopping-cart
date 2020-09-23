import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from "./reducers/productReducers";

const initialStare = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialStare,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
