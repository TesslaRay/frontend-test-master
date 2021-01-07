export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const increment_count_action = (quantity) => {
  return {
    type: INCREMENT_COUNT,
    payload: quantity,
  };
};

export const decrement_count_action = (quantity) => {
  return {
    type: DECREMENT_COUNT,
    payload: quantity,
  };
};
