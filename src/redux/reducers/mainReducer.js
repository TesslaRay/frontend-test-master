import {
  FETCH_COUNT_ERROR,
  FETCH_COUNT_REQUEST,
  FETCH_COUNT_SUCCESS,
} from '../actions/main';

const initialState = {
  loading: false,
  counts: [],
  error: '',
};

const count_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNT_REQUEST:
      return {
        ...state,
        counts: [],
        loading: true,
      };
    case FETCH_COUNT_SUCCESS: {
      return {
        loading: false,
        counts: action.payload[0] == '' ? [] : action.payload,
        error: '',
      };
    }
    case FETCH_COUNT_ERROR:
      return {
        loading: false,
        counts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default count_reducer;
