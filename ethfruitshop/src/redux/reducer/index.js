const { combineReducers } = require("redux");
import { shop } from "./shop";
const rootReducer = combineReducers({ ...shop });

export default rootReducer;
