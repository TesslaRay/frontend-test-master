import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import ReplayIcon from '@material-ui/icons/Replay';
import {useSelector} from 'react-redux';
import {Typography} from '@material-ui/core';
import {primary} from '../utils/colors';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  block: {
    display: 'flex',
    alignItems: 'center',
  },
  items: {
    paddingRight: `calc(1em + ${theme.spacing(0)}px)`,
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    color: '#212121',
    fontSize: '12px',
  },
  times: {
    paddingRight: `calc(1em + ${theme.spacing(0)}px)`,
    fontFamily: theme.typography.fontFamily,
    fontWeight: '500',
    color: '#888B90',
    fontSize: '12px',
  },
  refreshing: {
    color: primary,
  },
  icon: {
    transform: 'scaleX(-1)',
    color: '#4A4A4A',
  },
  iconRefresh: {
    transform: 'scaleX(-1)',
    color: primary,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const count_reducer = useSelector((state) => state.count_reducer);
  const ui_reducer = useSelector((state) => state.ui_reducer);
  const search_reducer = useSelector((state) => state.search_reducer);

  let searchFilter = count_reducer.counts[0].filter((count) =>
    count.title.includes(search_reducer.searchCounter),
  );

  let times = 0;
  if (search_reducer.searchState && search_reducer.searchCounter.length > 0) {
    for (let i = 0; i < searchFilter.length; i++) {
      times = times + searchFilter[i].count;
    }
  } else {
    for (let i = 0; i < count_reducer.counts[0].length; i++) {
      times = times + count_reducer.counts[0][i].count;
    }
  }

  return (
    <Container className={classes.box}>
      <Container className={classes.block}>
        {ui_reducer.itemSelected.length < 1 && (
          <React.Fragment>
            <div className={classes.items}>
              {search_reducer.searchState &&
              search_reducer.searchCounter.length > 0
                ? searchFilter.length
                : count_reducer.counts[0].length}
              &nbsp; items
            </div>
            <div className={classes.times}>{times} times</div>
            {!count_reducer.loadingChangeValue && (
              <ReplayIcon className={classes.icon} />
            )}
            {/* Refreshing */}
            {count_reducer.loadingChangeValue && (
              <React.Fragment>
                <ReplayIcon className={classes.iconRefresh} />
                <Typography color="primary">Refreshing…</Typography>
              </React.Fragment>
            )}
          </React.Fragment>
        )}

        {ui_reducer.itemSelected.length > 0 && (
          <React.Fragment>
            <React.Fragment>
              <Typography color="primary">1 selected</Typography>
              <ReplayIcon className={classes.icon} />
            </React.Fragment>
          </React.Fragment>
        )}
      </Container>
    </Container>
  );
};
