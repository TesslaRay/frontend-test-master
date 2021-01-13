export const ACTIVE_COPY = 'ACTIVE_COPY';
export const UNACTIVE_COPY = 'UNACTIVE_COPY';
// --end-actions-types--

// ACTIONS
export const activeCopy = () => {
  return {
    type: ACTIVE_COPY,
  };
};

export const unactiveCopy = () => {
  return {
    type: UNACTIVE_COPY,
  };
};
