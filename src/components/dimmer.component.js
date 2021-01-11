import {makeStyles} from '@material-ui/core';
import React from 'react';

import {useSelector} from 'react-redux';
import {Header} from './header.component';
import {ItemList} from './itemlist.component';

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
  const count_reducer = useSelector((state) => state.count_reducer);
  const search_reducer = useSelector((state) => state.search_reducer);

  let searchFilter = count_reducer.counts[0].filter((count) =>
    count.title.includes(search_reducer.searchCounter),
  );

  if (search_reducer.searchState) {
    if (searchFilter.length && search_reducer.searchCounter !== '') {
      return (
        <div>
          <Header />
          <ItemList />
        </div>
      );
    } else if (search_reducer.searchCounter === '') {
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
