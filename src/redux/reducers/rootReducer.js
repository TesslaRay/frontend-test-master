import {combineReducers} from 'redux';
import count_reducer from './mainReducer';
import ui_reducer from './uiReducer';

const rootReducers = combineReducers({
  count_reducer,
  ui_reducer,
});

export default rootReducers;
