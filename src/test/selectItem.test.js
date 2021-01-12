import configureStore from 'redux-mock-store';
import {selectItem} from '../redux/actions/select-item.actions';

const mockStore = configureStore();
const store = mockStore();

describe('selectAvatar', () => {
  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: 'SELECT_ITEM',
        payload: 'item',
      },
    ];

    store.dispatch(selectItem('item'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
