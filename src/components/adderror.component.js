import React, {useState} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {danger, title, subtitle, primary} from '../utils/colors';
import {Button, makeStyles, Typography} from '@material-ui/core';
import {boxShadow} from '../utils/constans';

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
    color: 'white',
    backgroundColor: primary,
    fontWeight: '600',
    boxShadow: boxShadow.boxShadow,
    textTransform: 'none',
  },
}));

export const AddError = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography align="center" className={classes.title}>
            Couldn’t create counter
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography className={classes.subtitle} align="center">
            The Internet connection appears to be offline.
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.dismiss}
            onClick={() => {
              handleClose();
            }}
          >
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
