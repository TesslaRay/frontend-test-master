export const SEARCH_COUNTER = 'SEARCH_COUNTER';
export const SEARCH_ACTIVATE = 'SEARCH_ACTIVATE';
export const SEARCH_DESACTIVATE = 'SEARCH_DESACTIVATE';

export const searchCounter = (item) => {
  return {
    type: SEARCH_COUNTER,
    payload: item,
  };
};

export const activateSearch = () => {
  return {
    type: SEARCH_ACTIVATE,
  };
};

export const desactivateSearch = () => {
  return {
    type: SEARCH_DESACTIVATE,
  };
};
