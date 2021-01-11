import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {primary} from '../utils/colors';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import {Chip, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {boxShadow} from '../utils/constans';
import {ExampleList} from '../components/example.component';

const useStyles = makeStyles((theme) => ({
  dimmer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '70px',
  },
  root: {
    // marginTop: '20hv',
    borderRadius: '16px 16px 0px 0px',
    height: '70px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    transform: 'rotate(45deg) scale(2)',
    color: '#C4C4C4',
  },
  title: {
    flexGrow: 1,
    fontWeight: '600',
  },
  saveButton: {
    color: '#FFFFFF',
    textTransform: 'none',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
  },
  // TODO: opacity?
  separator: {
    backgroundColor: '#C4C4C4',
    height: '3px',
  },
  body: {
    marginTop: '10px',
    margin: '10px',
    alignItems: 'center',
  },
  search: {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    '&:hover': {
      border: `2px solid ${primary}`,
    },
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em)`,
  },
  subtitle: {
    marginTop: '4px',
    color: '#888B90',
    fontWeight: 400,
  },
  loader: {
    textAlign: 'center',
  },
  text: {
    margin: '20px ',
    color: '#888B90',
    fontSize: '12px',
    fontWeight: 400,
  },
  section: {
    text: 'center',
  },
  titleSection: {
    marginLeft: '20px ',
    marginTop: '25px ',
    color: '#000000',
    fontSize: '12px',
    fontWeight: 500,
  },
  chip: {
    margin: '10px',
    backgroundColor: '#ECECEC',
    border: '1px solid #DCDCDF',
    boxShadow: boxShadow.boxShadow,
    color: '#000000',
    fontSize: '12px',
    fontWeight: 500,
  },
}));

const ExampleScreen = () => {
  const classes = useStyles();

  const handleClick = (example) => {
    console.info(`You clicked the Chip ${example.name}`);
  };

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
      </Container>
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
    </div>
  );
};

export default ExampleScreen;
