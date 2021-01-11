import React from 'react';
import {Chip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {boxShadow} from '../utils/constans';
import {useDispatch} from 'react-redux';
import addCounter from '../redux/actions/add-counter.actions';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  chip: {
    margin: '10px',
    backgroundColor: '#ECECEC',
    border: '1px solid #DCDCDF',
    boxShadow: boxShadow.boxShadow,
    color: '#000000',
    fontSize: '12px',
    fontWeight: 500,
  },
}));

export const ExampleList = (items) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = (example) => {
    dispatch(addCounter(example.name));
  };

  return items.items.map((item, key) => {
    return (
      <Chip
        label={item.name}
        key={key}
        className={classes.chip}
        component={Link}
        to="/main"
        onClick={() => {
          handleClick(item);
        }}
      />
    );
  });
};
