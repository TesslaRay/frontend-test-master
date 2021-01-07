import {DECREMENT_COUNT, INCREMENT_COUNT} from '../actions/countActions';

const default_count_shop = {
  count: 0,
};

const count_shop = (state = default_count_shop, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case DECREMENT_COUNT: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    default:
      return state;
  }
};

export default count_shop;
