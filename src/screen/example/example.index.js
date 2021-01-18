import React from 'react';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import {Container} from '@material-ui/core';
import {Link} from 'react-router-dom';

import ExampleList from '../../components/example.component';

import useStyles from './example.style';

const ExampleScreen = () => {
  const classes = useStyles();

  const drinks = [
    {
      name: 'Coke ',
    },
    {
      name: 'Fanta ',
    },
    {
      name: 'Glasses of water ',
    },
    {
      name: 'Cups of coffee ',
    },
    {
      name: 'Pisco ',
    },
  ];

  const foods = [
    {
      name: 'Hot-dog ',
    },
    {
      name: 'Apple ',
    },
    {
      name: 'Watermelon',
    },
    {
      name: 'Pasta ',
    },
    {
      name: 'Sushi ',
    },
  ];

  const misc = [
    {
      name: 'Perfect day ',
    },
    {
      name: 'Days alive',
    },
    {
      name: 'Minutes without bugs',
    },
    {
      name: 'Workdays',
    },
    {
      name: ' PS 5',
    },
  ];

  return (
    <div className={classes.dimmer}>
      -
      <Container className={classes.root}>
        <div className={classes.header}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            component={Link}
            to="/create"
          >
            <AddCircleIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Examples
          </Typography>
        </div>
        <Divider />
        <Typography className={classes.text}>
          Select an example to add it to your counters.
        </Typography>
        <div className={classes.section}>
          <Typography className={classes.titleSection}>Drinks</Typography>
          <ExampleList items={drinks} />
        </div>
        <div className={classes.section}>
          <Typography className={classes.titleSection}>Food</Typography>
          <ExampleList items={foods} />
        </div>
        <div className={classes.section}>
          <Typography className={classes.titleSection}>Misc</Typography>
          <ExampleList items={misc} />
        </div>
      </Container>
    </div>
  );
};

export default ExampleScreen;
