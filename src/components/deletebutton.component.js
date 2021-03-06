import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCounter} from '../redux/actions/delete-counter.actions';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {danger, title, subtitle, primary} from '../utils/colors';
import {Typography} from '@material-ui/core';
import {boxShadow} from '../utils/constans';
import {unselectItem} from '../redux/actions/select-item.actions';

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
  paper: {
    borderRadius: '10px',
    backgroundColor: '#FAFAFA',
    boxShadow: '0px 24px 38px rgba(0, 0, 0, 0.14)',
  },
  title: {
    color: title,
    fontSize: '18px',
    fontWeight: '600',
    alignText: 'center',
  },
  subtitle: {
    color: subtitle,
    alignText: 'center',
  },
  dialogActions: {
    justifyContent: 'center',
  },
  cancel: {
    backgroundColor: primary,
    color: 'white',
    fontWeight: '600',
    boxShadow: boxShadow.boxShadow,
    textTransform: 'none',
  },
  delete: {
    color: danger,
    fontWeight: '600',
    boxShadow: boxShadow.boxShadow,
    textTransform: 'none',
  },
  dismiss: {
    color: primary,
    fontWeight: '600',
    boxShadow: boxShadow.boxShadow,
    textTransform: 'none',
  },
}));

const DeleteButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uiReducer = useSelector((state) => state.uiReducer);

  const [open, setOpen] = useState(false);

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

      {/* Delete confirmation */}
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogTitle>
          <Typography
            align="center"
            className={classes.title}
          >{`Delete the “${uiReducer.itemSelected[0].title}” counter?`}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography className={classes.subtitle} align="center">
            This cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleClose} className={classes.cancel}>
            Cancel
          </Button>
          <Button
            className={classes.delete}
            onClick={() => {
              dispatch(deleteCounter(uiReducer.itemSelected[0].id));
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

export default DeleteButton;
