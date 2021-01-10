import {makeStyles} from '@material-ui/core';
import React from 'react';

import {useSelector} from 'react-redux';
import {Header} from './header.component';
import {ItemList} from './itemlist.component';

const useStyles = makeStyles((theme) => ({
  dimmerOn: {
    opacity: 0.2,
  },
}));

export const Dimmer = () => {
  const classes = useStyles();
  const count_reducer = useSelector((state) => state.count_reducer);
  const search_reducer = useSelector((state) => state.search_reducer);

  let searchFilter = count_reducer.counts[0].filter((count) =>
    count.title.includes(search_reducer.searchCounter),
  );

  console.log(searchFilter);

  return search_reducer.searchState && searchFilter.length > 0 ? (
    <div className={classes.dimmerOn}>
      <Header />
      <ItemList />
    </div>
  ) : (
    <React.Fragment>
      <ItemList />
    </React.Fragment>
  );
};
