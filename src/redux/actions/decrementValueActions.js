import axios from 'axios';
import url from '../../config/env.js';

export const DECREMENT_VALUE_REQUEST = 'DECREMENT_VALUE_REQUEST';
export const DECREMENT_VALUE_SUCCESS = 'DECREMENT_VALUE_SUCCESS';
export const DECREMENT_VALUE_ERROR = 'DECREMENT_VALUE_ERROR';
// --end-actions-types--

// ACTIONS
export const decrementValueRequest = () => {
  return {
    type: DECREMENT_VALUE_REQUEST,
  };
};

export const decrementValueSuccess = (response) => {
  return {
    type: DECREMENT_VALUE_SUCCESS,
    payload: response,
  };
};

export const decrementValueError = (error) => {
  return {
    type: DECREMENT_VALUE_ERROR,
    payload: error,
  };
};

const decrementValue = (item) => {
  return (dispatch) => {
    dispatch(decrementValueRequest());
    axios
      .post(`${url}/api/v1/counter/dec`, {id: item.id})
      .then((response) => dispatch(decrementValueSuccess([response.data])))
      .catch((error) => dispatch(decrementValueError('No connection')));
  };
};

export default decrementValue;
