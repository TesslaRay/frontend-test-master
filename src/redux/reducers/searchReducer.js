import {
  SEARCH_COUNTER,
  SEARCH_ACTIVATE,
  SEARCH_DESACTIVATE,
} from '../actions/searchCounterActions';

const initialState = {
  searchCounter: '',
  searchState: false,
};

const search_reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case SEARCH_COUNTER:
      return {
        ...state,
        searchCounter: action.payload,
      };

    case SEARCH_ACTIVATE:
      return {
        ...state,
        searchState: true,
      };

    case SEARCH_DESACTIVATE:
      return {
        ...state,
        searchState: false,
      };
  }
};

export default search_reducer;
