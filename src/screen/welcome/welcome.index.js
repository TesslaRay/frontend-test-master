import React from 'react';
import {Link} from 'react-router-dom';

import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Logo} from '../../images/logo-test.svg';

import {Box, Button, Typography} from '@material-ui/core';

import useStyles from './welcome.style';

const Welcome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SvgIcon
        component={Logo}
        viewBox="0 0 206 209"
        className={classes.logo}
      />
      <p className={classes.title}>Welcome to Counters</p>
      <p className={classes.subtitle}>
        Capture cups of lattes, frapuccinos, or anything else that can be
        counted.
      </p>
      <Box mt={8} className={classes.bottom}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          component={Link}
          to="/main"
        >
          <Typography className={classes.textButton}>Get started</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
