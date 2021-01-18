import {combineReducers} from 'redux';
import countReducer from './main.reducer';
import searchReducer from './search.reducer';
import uiReducer from './ui.reducer';

const rootReducers = combineReducers({
  countReducer,
  uiReducer,
  searchReducer,
});

export default rootReducers;
