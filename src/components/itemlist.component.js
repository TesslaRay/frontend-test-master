import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

import {useSelector} from 'react-redux';

import CounterCell from './countercell.component';

const useStyles = makeStyles((theme) => ({
  noresults: {
    marginTop: '40vh',
  },
}));

const ItemList = () => {
  const classes = useStyles();

  const countReducer = useSelector((state) => state.countReducer);
  const searchReducer = useSelector((state) => state.searchReducer);

  let searchFilter = countReducer.counts[0].filter((count) =>
    count.title.includes(searchReducer.searchCounter),
  );

  if (searchReducer.searchState && searchReducer.searchCounter.length > 0) {
    if (searchReducer.searchState && searchFilter.length > 0) {
      return searchFilter.map((item, key) => {
        return <CounterCell item={item} key={key} />;
      });
    } else {
      return <Typography className={classes.noresults}>No results</Typography>;
    }
  } else {
    return countReducer.counts[0].map((item, key) => {
      return <CounterCell item={item} key={key} />;
    });
  }
};

export default ItemList;
