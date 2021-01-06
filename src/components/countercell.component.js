import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import incrementValueCounter from '../screen/actions';

const useStyles = makeStyles((theme) => ({
  box: {
    height: '67px',
    display: 'flex',
    alignItems: 'center',
  },
  block: {
    height: '53px',
    '&:hover': {
      backgroundColor: 'rgba(255, 149, 0, 0.5)',
    },
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '400',
    color: '#212121',
    fontSize: '12px',
    width: '50%',
  },
  rigthside: {
    marginLeft: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  number: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    color: '#212121,',
    margin: '20px',
  },
}));

const incrementValueCounter = (item) =>
  fetch('/api/v1/counter/inc', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: item.id}),
  }).then((res) => res.json());

const decrementValueCounter = (item) =>
  fetch('/api/v1/counter/dec', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: item.id}),
  }).then((res) => res.json());

export const CounterCell = ({item}) => {
  const classes = useStyles();

  return (
    <Container className={classes.box}>
      <Container className={classes.block}>
        <div className={classes.text}>{item.title}</div>
        <div className={classes.rigthside}>
          <RemoveIcon
            color="primary"
            onClick={() => decrementValueCounter(item)}
          />
          <span className={classes.number}>{item.count}</span>
          <AddIcon
            color="primary"
            onClick={() => incrementValueCounter(item)}
          />
        </div>
      </Container>
    </Container>
  );
};
