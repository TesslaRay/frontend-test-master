import {ACTIVE_COPY, UNACTIVE_COPY} from '../actions/active-copy.actions';
import {SELECT_ITEM, UNSELECT_ITEM} from '../actions/select-item.actions';

const initialState = {
  itemSelected: [],
  copyIsActive: false,
};

const ui_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        itemSelected: [action.payload],
      };

    case UNSELECT_ITEM: {
      return {
        ...state,
        itemSelected: [],
      };
    }

    case ACTIVE_COPY:
      return {
        ...state,
        copyIsActive: true,
      };

    case UNACTIVE_COPY:
      return {
        ...state,
        copyIsActive: false,
      };

    default:
      return state;
  }
};

export default ui_reducer;
