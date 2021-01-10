import {combineReducers} from 'redux';
import count_reducer from './mainReducer';
import search_reducer from './searchReducer';
import ui_reducer from './uiReducer';

const rootReducers = combineReducers({
  count_reducer,
  ui_reducer,
  search_reducer,
});

export default rootReducers;
