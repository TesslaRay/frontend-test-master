import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Logo} from '../images/logo-test.svg';
import {Box, Button} from '@material-ui/core';

// TODO: margin: 8px where??
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F9F9F9',
    textAlign: 'center',
    height: '100vh',
  },
  logo: {
    marginTop: '10vh',
    width: '178px',
    height: '178px',
  },
  title: {
    marginTop: '10vh',
    fontFamily: theme.typography.fontFamily,
    fontSize: '18px',
    fontWeight: '600',
  },
  subtitle: {
    margin: theme.spacing(8),
    fontFamily: theme.typography.fontFamily,
    fontSize: '13px',
    color: '#4A4A4A',
  },
  bottom: {
    color: 'white',
  },
  button: {
    textTransform: 'none',
    color: 'white',
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} position="fixed">
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
        <Button variant="contained" color="primary" className={classes.button}>
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
