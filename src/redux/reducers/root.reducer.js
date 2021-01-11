import {combineReducers} from 'redux';
import count_reducer from './main.reducer';
import search_reducer from './search.reducer';
import ui_reducer from './ui.reducer';

const rootReducers = combineReducers({
  count_reducer,
  ui_reducer,
  search_reducer,
});

export default rootReducers;
