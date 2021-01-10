export const SELECT_ITEM = 'SELECT_ITEM';
export const UNSELECT_ITEM = 'UNSELECT_ITEM';

// --end-actions-types--

// ACTIONS
export const selectItem = (item) => {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};

export const unselectItem = () => {
  return {
    type: UNSELECT_ITEM,
  };
};

export default selectItem;
