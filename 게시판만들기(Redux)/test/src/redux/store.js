import { combineReducers, createStore } from 'redux';
import { login, loginUser, post, user } from './reducer';
const reducer = combineReducers({ login, user, loginUser, post });
const store = createStore(reducer);

export default store;
