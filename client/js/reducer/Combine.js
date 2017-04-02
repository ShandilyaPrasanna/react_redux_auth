import {combineReducers} from 'redux';
import Axios_reducer from './Axios_reducer';

const allReducer=combineReducers({Axios_reducer:Axios_reducer})

export default allReducer;