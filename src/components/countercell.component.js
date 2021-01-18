import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import {useDispatch, useSelector} from 'react-redux';

import {incrementValue} from '../redux/actions/increment-value.actions';
import {decrementValue} from '../redux/actions/decrement-value.actions';
import {selectItem} from '../redux/actions/select-item.actions';
import {primary} from '../utils/colors';

const useStyles = makeStyles((theme) => ({
  box: {
    height: '67px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },
  block: {
    height: '53px',
    borderRadius: '6px',
    display: 'flex',
    // alignItems: 'center',
  },
  selected: {
    height: '53px',
    backgroundColor: 'rgba(255, 149, 0, 0.5)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '400',
    color: '#212121',
    fontSize: '12px',
    width: '90%',
  },
  rigthside: {
    float: 'right',
    display: 'flex',
    alignItems: 'center',
  },
  aboveZero: {
    color: primary,
  },
  equalZero: {
    color: '#DCDCDF',
  },
  number: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    color: '#212121,',
    margin: '20px',
  },
}));

const CounterCell = ({item}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uiReducer = useSelector((state) => state.uiReducer);
  function handleDecrement() {
    dispatch(decrementValue(item));
  }

  function handleIncrement() {
    dispatch(incrementValue(item));
  }

  let isSelected = false;
  if (uiReducer.itemSelected.length) {
    isSelected = uiReducer.itemSelected[0].title === item.title ? true : false;
  }

  return (
    <Container className={classes.box}>
      <Container className={isSelected ? classes.selected : classes.box}>
        <div
          className={classes.title}
          onClick={() => {
            dispatch(selectItem(item));
          }}
        >
          {item.title}
        </div>
        <div className={classes.rigthside}>
          {item.count > 0 && (
            <RemoveIcon
              className={classes.aboveZero}
              onClick={() => handleDecrement()}
            />
          )}
          {item.count === 0 && <RemoveIcon className={classes.equalZero} />}
          <span className={classes.number}>{item.count}</span>
          <div data-testid="plus">
            <AddIcon color="primary" onClick={() => handleIncrement()} />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default CounterCell;
