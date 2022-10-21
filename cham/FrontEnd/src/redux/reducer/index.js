import login from "./login";
import { shop } from "./shop";
import { user } from "./user";
const { combineReducers } = require("redux");
const rootReducer = combineReducers({ login, ...shop, ...user });

export default rootReducer;
