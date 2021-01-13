import axios from 'axios';
import url from '../../config/env.js';

export const FETCH_COUNT_REQUEST = 'FETCH_COUNT_REQUEST';
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';
export const FETCH_COUNT_ERROR = 'FETCH_COUNT_ERROR';
// --end-actions-types--

// Actions
export const fetchCountRequest = () => {
  return {
    type: FETCH_COUNT_REQUEST,
  };
};

export const fetchCountSuccess = (response) => {
  return {
    type: FETCH_COUNT_SUCCESS,
    payload: response,
  };
};

export const fetchCountError = (error) => {
  return {
    type: FETCH_COUNT_ERROR,
    payload: error,
  };
};

export const fetchCount = () => {
  return (dispatch) => {
    dispatch(fetchCountRequest());
    return axios
      .get(`${url}/api/v1/counter`)
      .then((response) => {
        dispatch(fetchCountSuccess([response.data]));
      })
      .catch(() => dispatch(fetchCountError('No connection')));
  };
};
