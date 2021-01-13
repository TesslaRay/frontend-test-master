import axios from 'axios';
import url from '../../config/env.js';

export const ADD_COUNTER_REQUEST = 'ADD_COUNTER_REQUEST';
export const ADD_COUNTER_SUCCESS = 'ADD_COUNTER_SUCCESS';
export const ADD_COUNTER_ERROR = 'ADD_COUNTER_ERROR';
// --end-actions-types--

// ACTIONS
export const addCounterRequest = () => {
  return {
    type: ADD_COUNTER_REQUEST,
  };
};

export const addCounterSuccess = (response) => {
  return {
    type: ADD_COUNTER_SUCCESS,
    payload: response,
  };
};

export const addCounterError = (error) => {
  return {
    type: ADD_COUNTER_ERROR,
    payload: error,
  };
};

export const addCounter = (title) => {
  return (dispatch) => {
    dispatch(addCounterRequest());
    return axios
      .post(`${url}/api/v1/counter`, {title: title})
      .then((response) => dispatch(addCounterSuccess([response.data])))
      .catch((error) => dispatch(addCounterError('No connection')));
  };
};
