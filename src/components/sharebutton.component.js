import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';

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
}));

export const ShareButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        <ShareIcon />
      </Button>
    </div>
  );
};
