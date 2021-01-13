import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {AddButton} from '../components/addbutton.component';

describe('Componentns test', () => {
  test('renders AddButton component', () => {
    const {container} = render(
      <Router>
        <AddButton />
      </Router>,
    );
    // console.log(container.innerHTML);
    // console.log(container.getByText);

    // console.log(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole).toHaveBeenCalledTimes(1);
  });
});
