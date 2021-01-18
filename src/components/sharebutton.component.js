import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {primary, title} from '../utils/colors';
import {Snackbar, Typography} from '@material-ui/core';
import {boxShadow} from '../utils/constans';
import {useDispatch, useSelector} from 'react-redux';
import {activeCopy, unactiveCopy} from '../redux/actions/active-copy.actions';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#FFFFFF',
    color: '#2B2B2B',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    float: 'left',
  },
  paper: {
    borderRadius: '10px',
    backgroundColor: '#FAFAFA',
    boxShadow: '0px 24px 38px rgba(0, 0, 0, 0.14)',
    position: 'absolute',
    left: '55vh',
    top: '70vh',
    [theme.breakpoints.down('xs')]: {
      left: '0%',
      top: '70%',
    },
  },
  title: {
    color: title,
    fontSize: '18px',
    fontWeight: '600',
    alignText: 'center',
  },
  dialogActions: {
    justifyContent: 'center',
  },
  copy: {
    color: primary,
    fontSize: '15px',
    fontWeight: '600',
    boxShadow: boxShadow.boxShadow,
    textTransform: 'none',
  },
}));

const ShareButton = () => {
  const classes = useStyles();
  const uiReducer = useSelector((state) => state.uiReducer);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => dispatch(activeCopy())}
      >
        <ShareIcon />
      </Button>

      {/* Delete confirmation */}
      <Dialog
        open={uiReducer.copyIsActive}
        onClick={() => {
          dispatch(unactiveCopy());
        }}
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogTitle>
          <Typography align="center" className={classes.title}>
            Share 1 counter
          </Typography>
        </DialogTitle>

        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.copy}
            onClick={() => {
              navigator.clipboard.writeText(
                `${uiReducer.itemSelected[0].count}x ${uiReducer.itemSelected[0].title}`,
              );
              handleClick();
            }}
            color="primary"
          >
            Copy
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={800}
        onClose={handleClose}
        message="Copied"
      />
    </div>
  );
};

export default ShareButton;
