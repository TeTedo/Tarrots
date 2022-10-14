import login from "./login";
import shop from "./shop";
const { combineReducers } = require("redux");
const rootReducer = combineReducers({ login, shop });

export default rootReducer;
