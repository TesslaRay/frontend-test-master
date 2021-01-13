import React from 'react';
import {
  render,
  screen,
  fireEvent,
  queryByAttribute,
} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';

import '@testing-library/jest-dom';

import {AddButton} from '../components/addbutton.component';
import {AddError} from '../components/adderror.component';
import {SearchBar} from '../components/searchbar.component';
import {CounterCell} from '../components/countercell.component';

describe('Componentens test', () => {
  test('<AddButton />', () => {
    render(
      <Router>
        <AddButton />
      </Router>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    // expect(true).toEqual(true);
  });

  test('<AddError />', () => {
    render(
      <Router>
        <AddError />
      </Router>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('<SearchBar />', () => {
    const utils = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    const input = utils.getByLabelText('search');

    fireEvent.change(input, {target: {value: 'Coke'}});
    expect(input.value).toBe('Coke');
  });

  let itemToTest = {
    id: 'kjuwquze',
    title: 'Coke',
    count: 0,
  };

  test('<CounterCell />', () => {
    const utils = render(
      <Provider store={store}>
        <CounterCell item={itemToTest} />
      </Provider>,
    );
    const title = utils.getByText('Coke');

    const icon = utils.getByTestId('plus');

    const count = utils.getByText('0');

    expect(count.textContent).toBe('0');
    expect(title.textContent).toBe('Coke');

    // fireEvent.click(icon);
    expect(count.textContent).toBe('1');
  });
});
