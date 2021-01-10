import {SELECT_ITEM, UNSELECT_ITEM} from '../actions/selectItemActions';

const initialState = {
  itemSelected: [],
};

const ui_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        itemSelected: [action.payload],
      };

    case UNSELECT_ITEM: {
      return {
        itemSelected: [],
      };
    }

    default:
      return state;
  }
};

export default ui_reducer;
