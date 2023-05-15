import { combineReducers } from "redux";

import accountReducer from './accountReducers'
import counterReducer from './counterReducers'

const reducers=combineReducers({account:accountReducer},{counter:counterReducer});

export default reducers;