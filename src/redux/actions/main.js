import axios from 'axios';

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

export const fetchCountSucces = (response) => {
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

const fetchCount = () => {
  return (dispatch) => {
    dispatch(fetchCountRequest());
    axios
      .get('http://localhost:3001/api/v1/counter')
      .then((response) => {
        dispatch(fetchCountSucces([response.data]));
      })
      .catch((error) => dispatch(fetchCountError('No internet')));
  };
};

export default fetchCount;
