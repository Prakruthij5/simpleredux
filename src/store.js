import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import counterReducers from "/.reducers/counterindex";

//const store=createStore(reducers,{},applyMiddleware(thunk));
const store=createStore(counterReducers,{},applyMiddleware(thunk));

export default store;
