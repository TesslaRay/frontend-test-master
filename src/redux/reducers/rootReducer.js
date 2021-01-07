import {combineReducers} from 'redux';
import count_shop from './countReducer';
import count_reducer from './mainReducer';

const rootReducers = combineReducers({
  count_shop,
  count_reducer,
});

export default rootReducers;
