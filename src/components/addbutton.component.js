import React from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    borderRadius: '8px',
    float: 'right',
  },
}));

export const AddButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/create"
      >
        <AddIcon />
      </Button>
    </div>
  );
};
