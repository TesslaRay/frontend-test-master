import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {useSelector} from 'react-redux';

import {CounterCell} from './countercell.component';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  noresults: {
    marginTop: '40vh',
  },
}));

export const ItemList = () => {
  const classes = useStyles();

  const count_reducer = useSelector((state) => state.count_reducer);
  const search_reducer = useSelector((state) => state.search_reducer);

  let searchFilter = count_reducer.counts[0].filter((count) =>
    count.title.includes(search_reducer.searchCounter),
  );

  // console.log(search_reducer.searchState && searchFilter.length > 0);

  if (search_reducer.searchState && search_reducer.searchCounter.length > 0) {
    if (search_reducer.searchState && searchFilter.length > 0) {
      return searchFilter.map((item, key) => {
        return <CounterCell item={item} key={key} />;
      });
    } else {
      return <Typography className={classes.noresults}>No results</Typography>;
    }
  } else {
    return count_reducer.counts[0].map((item, key) => {
      return <CounterCell item={item} key={key} />;
    });
  }
};
