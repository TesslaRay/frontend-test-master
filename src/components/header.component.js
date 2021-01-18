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

const Header = () => {
  const classes = useStyles();
  const countReducer = useSelector((state) => state.countReducer);
  const uiReducer = useSelector((state) => state.uiReducer);
  const searchReducer = useSelector((state) => state.searchReducer);

  let searchFilter = countReducer.counts[0].filter((count) =>
    count.title.includes(searchReducer.searchCounter),
  );

  let times = 0;
  if (searchReducer.searchState && searchReducer.searchCounter.length > 0) {
    for (let i = 0; i < searchFilter.length; i++) {
      times = times + searchFilter[i].count;
    }
  } else {
    for (let i = 0; i < countReducer.counts[0].length; i++) {
      times = times + countReducer.counts[0][i].count;
    }
  }

  return (
    <Container className={classes.box}>
      <Container className={classes.block}>
        {uiReducer.itemSelected.length < 1 && (
          <React.Fragment>
            <div className={classes.items}>
              {searchReducer.searchState &&
              searchReducer.searchCounter.length > 0
                ? searchFilter.length
                : countReducer.counts[0].length}
              &nbsp; items
            </div>
            <div className={classes.times}>{times} times</div>
            {!countReducer.loadingChangeValue && (
              <ReplayIcon className={classes.icon} />
            )}
            {/* Refreshing */}
            {countReducer.loadingChangeValue && (
              <React.Fragment>
                <ReplayIcon className={classes.iconRefresh} />
                <Typography color="primary">Refreshing…</Typography>
              </React.Fragment>
            )}
          </React.Fragment>
        )}

        {uiReducer.itemSelected.length > 0 && (
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

export default Header;
