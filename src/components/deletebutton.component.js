import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from 'react-redux';
import deleteCounter from '../redux/actions/deleteCounterActions';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {unselectItem} from '../redux/actions/selectItemActions';
import {danger} from '../utils/colors';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#FFFFFF',
    color: danger,
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => handleClickOpen()}
      >
        <DeleteIcon />
      </Button>

      {/* Dialog */}
      <Dialog
        open={open}
        // onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {ui_reducer.itemSelected.length > 0
            ? `Delete the “${ui_reducer.itemSelected[0].title}” counter?`
            : 0}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteCounter(ui_reducer.itemSelected[0].id));
              handleClose();
              dispatch(unselectItem());
            }}
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
