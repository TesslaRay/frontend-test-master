import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

import {AddButton} from '../components/addbutton.component';

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
    const {container} = render(
      <Router>
        <AddError />
      </Router>,
    );
    console.log(container);
  });
});
