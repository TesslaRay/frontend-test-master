import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import ReplayIcon from '@material-ui/icons/Replay';
import {useSelector} from 'react-redux';

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
  icon: {
    transform: 'scaleX(-1)',
    color: '#4A4A4A',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const count_reducer = useSelector((state) => state.count_reducer);

  let times = 0;
  for (let i = 0; i < count_reducer.counts[0].length; i++) {
    times = times + count_reducer.counts[0][i].count;
  }

  return (
    <Container className={classes.box}>
      <Container className={classes.block}>
        <div className={classes.items}>{count_reducer.counts.length} items</div>

        <div className={classes.times}>{times} times</div>
        <ReplayIcon
          className={classes.icon}
          onClick={() => window.location.reload()}
        />
      </Container>
    </Container>
  );
};
