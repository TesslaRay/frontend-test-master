import axios from 'axios';
const mock = new MockAdapter(axios);
import MockAdapter from 'axios-mock-adapter';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import url from '../config/env.js';
import * as fetchCountsActions from '../redux/actions/fetch-counts.actions';
import * as addCounterActions from '../redux/actions/add-counter.actions';
import * as incrementValueActions from '../redux/actions/increment-value.actions';
import * as decrementValueActions from '../redux/actions/decrement-value.actions';
import * as deleteCounterActions from '../redux/actions/delete-counter.actions';

const store = mockStore();

describe('Test actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('dispatches FETCH_COUNT_SUCCESS after a successfull API requets', () => {
    mock.onGet(`${url}/api/v1/counter`).reply(200, []);

    const expectedActions = [
      {type: fetchCountsActions.FETCH_COUNT_REQUEST},
      {
        type: fetchCountsActions.FETCH_COUNT_SUCCESS,
        payload: [[]],
      },
    ];

    return store.dispatch(fetchCountsActions.fetchCount()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('dispatches ADD_COUNTER_SUCCESS after a successfull API requets', () => {
    mock.onPost(`${url}/api/v1/counter`).reply(200, [
      {
        id: 'kjup185n',
        title: 'test',
        count: 0,
      },
    ]);

    const expectedActions = [
      {type: addCounterActions.ADD_COUNTER_REQUEST},
      {
        type: addCounterActions.ADD_COUNTER_SUCCESS,
        payload: [
          [
            {
              id: 'kjup185n',
              title: 'test',
              count: 0,
            },
          ],
        ],
      },
    ];

    const store = mockStore();

    return store.dispatch(addCounterActions.addCounter('test')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('dispatches INCREMENT_VALUE_SUCCESS after a successfull API requets', () => {
    mock.onPost(`${url}/api/v1/counter/inc`).reply(200, [
      {
        id: 'kjupsun3',
        title: 'test',
        count: 1,
      },
    ]);

    const expectedActions = [
      {type: incrementValueActions.INCREMENT_VALUE_REQUEST},
      {
        type: incrementValueActions.INCREMENT_VALUE_SUCCESS,
        payload: [
          [
            {
              id: 'kjupsun3',
              title: 'test',
              count: 1,
            },
          ],
        ],
      },
    ];

    const store = mockStore();

    return store
      .dispatch(incrementValueActions.incrementValue('kjnb7v4l'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('dispatches INCREMENT_VALUE_SUCCESS after a successfull API requets', () => {
    mock.onPost(`${url}/api/v1/counter/dec`).reply(200, [
      {
        id: 'kjupsun3',
        title: 'test',
        count: 0,
      },
    ]);

    const expectedActions = [
      {type: decrementValueActions.DECREMENT_VALUE_REQUEST},
      {
        type: decrementValueActions.DECREMENT_VALUE_SUCCESS,
        payload: [
          [
            {
              id: 'kjupsun3',
              title: 'test',
              count: 0,
            },
          ],
        ],
      },
    ];

    const store = mockStore();

    return store
      .dispatch(decrementValueActions.decrementValue('kjnb7v4l'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('dispatches DELETE_COUNTER_SUCCESS after a successfull API requets', () => {
    mock.onDelete(`${url}/api/v1/counter`).reply(200, ['kjq8yhdf']);

    const expectedActions = [
      {type: deleteCounterActions.DELETE_COUNTER_REQUEST},
      {
        type: deleteCounterActions.DELETE_COUNTER_SUCCESS,
        payload: [['kjq8yhdf']],
      },
    ];

    const store = mockStore();

    return store
      .dispatch(deleteCounterActions.deleteCounter('kjq8yhdf'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

mock.onDelete;
