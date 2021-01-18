import {makeStyles} from '@material-ui/core';
import React from 'react';

import {useSelector} from 'react-redux';

import Header from './header.component';
import ItemList from './itemlist.component';

const useStyles = makeStyles((theme) => ({
  dimmerOn: {
    opacity: 0.2,
  },
  dimmerOff: {
    opacity: 1,
  },
}));

export const Dimmer = () => {
  const classes = useStyles();
  const countReducer = useSelector((state) => state.countReducer);
  const searchReducer = useSelector((state) => state.searchReducer);

  let searchFilter = countReducer.counts[0].filter((count) =>
    count.title.includes(searchReducer.searchCounter),
  );

  if (searchReducer.searchState) {
    if (searchFilter.length && searchReducer.searchCounter !== '') {
      return (
        <div>
          <Header />
          <ItemList />
        </div>
      );
    } else if (searchReducer.searchCounter === '') {
      return (
        <div className={classes.dimmerOn}>
          <Header />
          <ItemList />
        </div>
      );
    } else {
      return (
        <div>
          <ItemList />
        </div>
      );
    }
  } else {
    return (
      <React.Fragment>
        <Header />
        <ItemList />
      </React.Fragment>
    );
  }
};
