import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Activity} from '../images/activity-indicator.svg';

// TODO: fix vertical position of ActivityIndicator
const useStyles = makeStyles(() => ({
  image: {
    marginTop: '200px',
    width: '114px',
    height: '114px',
  },
}));

export const ActivityIndicator = () => {
  const classes = useStyles();
  return (
    <div>
      <SvgIcon
        component={Activity}
        viewBox="0 0 114 114"
        className={classes.image}
      />
    </div>
  );
};
