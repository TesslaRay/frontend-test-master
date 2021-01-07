import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import {incrementValueCounter, decrementValueCounter} from '../screen/actions';

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

export const CounterCell = ({item}) => {
  const classes = useStyles();

  const [element, setElement] = useState(item);

  function onDecrement() {
    decrementValueCounter(item);
    item.count--;
    setElement({element: item});
  }

  function onIncrement() {
    incrementValueCounter(item);
    item.count++;
    setElement({element: item});
  }

  return (
    <Container className={classes.box}>
      <Container className={classes.block}>
        <div className={classes.text}>{item.title}</div>
        <div className={classes.rigthside}>
          <RemoveIcon color="primary" onClick={() => onDecrement()} />
          <span className={classes.number}>{item.count}</span>
          <AddIcon color="primary" onClick={() => onIncrement()} />
        </div>
      </Container>
    </Container>
  );
};
