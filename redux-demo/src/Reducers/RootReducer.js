import LoginReducer from './LoginReducer';
import CounterReducer from './CounterReducer';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    CounterReducer,
    LoginReducer,
})
export default rootReducer;