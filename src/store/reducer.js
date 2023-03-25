import { combineReducers } from "redux";
import { studentReducer } from "../components/duck/reducer";

const rootReducer = combineReducers({ studentReducer });

export { rootReducer };
