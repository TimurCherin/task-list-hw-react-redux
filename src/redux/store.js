import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import tasksReducer from "./tasks/reducer";
import filtersReducer from "./filters/reducer";

const rootReducer = combineReducers({ tasks: tasksReducer, filters: filtersReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;