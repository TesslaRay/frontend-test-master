import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import {useDispatch, useSelector} from 'react-redux';

import incrementValue from '../redux/actions/incrementValueActions';
import decrementValue from '../redux/actions/decrementValueActions';
import {selectItem} from '../redux/actions/selectItemActions';

const useStyles = makeStyles((theme) => ({
  box: {
    height: '67px',
    display: 'flex',
    alignItems: 'center',
  },
  block: {
    height: '53px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  selected: {
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
  const dispatch = useDispatch();
  const ui_reducer = useSelector((state) => state.ui_reducer);

  function onDecrement() {
    dispatch(decrementValue(item));
  }

  function onIncrement() {
    dispatch(incrementValue(item));
  }

  return (
    <Container
      className={classes.box}
      onClick={() => {
        dispatch(selectItem(item));
      }}
    >
      <Container
        className={
          ui_reducer.itemSelected.length > 0 ? classes.selected : classes.box
        }
      >
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
