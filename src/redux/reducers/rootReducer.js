import {combineReducers} from 'redux';
import count_reducer from './mainReducer';

const rootReducers = combineReducers({
  count_reducer,
});

export default rootReducers;
