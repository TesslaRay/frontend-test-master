import axios from 'axios';
import url from '../../config/env.js';

export const INCREMENT_VALUE_REQUEST = 'INCREMENT_VALUE_REQUEST';
export const INCREMENT_VALUE_SUCCESS = 'INCREMENT_VALUE_SUCCES';
export const INCREMENT_VALUE_ERROR = 'INCREMENT_VALUE_ERROR';
// --end-actions-types--

// ACTIONS
export const incrementValueRequest = () => {
  return {
    type: INCREMENT_VALUE_REQUEST,
  };
};

export const incrementValueSuccess = (response) => {
  return {
    type: INCREMENT_VALUE_SUCCESS,
    payload: response,
  };
};

export const incrementValueError = (error) => {
  return {
    type: INCREMENT_VALUE_ERROR,
    payload: error,
  };
};

export const incrementValue = (item) => {
  return (dispatch) => {
    dispatch(incrementValueRequest());
    return axios
      .post(`${url}/api/v1/counter/inc`, {id: item.id})
      .then((response) => dispatch(incrementValueSuccess([response.data])))
      .catch((error) => dispatch(incrementValueError('No connection')));
  };
};
