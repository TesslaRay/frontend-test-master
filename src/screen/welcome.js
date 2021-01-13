import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';

import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Logo} from '../images/logo-test.svg';

import {Box, Button, Typography} from '@material-ui/core';
import {boxShadow} from '../utils/constans';

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
    borderRadius: '8px',
    boxShadow: boxShadow.boxShadow,
  },
  textButton: {
    fontWeight: '600',
    fontSize: '15px',
  },
}));

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
