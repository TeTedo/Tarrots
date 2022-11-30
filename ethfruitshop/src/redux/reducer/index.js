import { shop } from "./shop";
const { combineReducers } = require("redux");
const rootReducer = combineReducers({ ...shop });

export default rootReducer;
