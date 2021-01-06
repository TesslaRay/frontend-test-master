import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    borderRadius: '8px',
  },
}));

export default function AddButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
}
