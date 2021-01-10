import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from 'react-redux';
import deleteCounter from '../redux/actions/deleteCounterActions';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#FFFFFF',
    color: '#FF3B30',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    float: 'left',
  },
}));

export const DeleteButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ui_reducer = useSelector((state) => state.ui_reducer);

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => dispatch(deleteCounter(ui_reducer.itemSelected[0].id))}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};
