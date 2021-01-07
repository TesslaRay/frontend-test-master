import {createStore} from 'redux';
import rootReducers from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools());

export default store;
