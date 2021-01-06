import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {SearchBar} from '../components/searchbar.component';
import {Header} from '../components/header.component';
import {CounterCell} from '../components/countercell.component';
import {AddButton} from '../components/addbutton.component';
import {ActivityIndicator} from '../components/activityindicator.component';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '30vh',
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
    position: 'fixed',
    bottom: theme.spacing(2),
    width: '95%',
  },
}));

const element1 = {
  text: 'Cups of Coffe',
  number: 5,
};

const element2 = {
  text: 'Records played',
  number: 10,
};

const element3 = {
  text:
    'Number of times I’ve forgotten my mother’s name because I was high on Frugelés.',
  number: 2,
};

const element4 = {
  text: 'Apples eaten',
  number: 0,
};

const Main = () => {
  const classes = useStyles();

  const mainState = 'has-content';

  const mainStateRender = () => {
    switch (mainState) {
      case 'no-content':
        return (
          <div>
            <p className={classes.title}>No counters yet</p>
            <p className={classes.subtitle}>
              “When I started counting my blessings, my whole life turned
              around.” —Willie Nelson
            </p>
          </div>
        );
      case 'loading':
        return <ActivityIndicator />;
      case 'has-content':
        return (
          <div>
            <Header />
            <CounterCell element={element1} />
            {/* <CounterCell element={element2} />
            <CounterCell element={element3} />
            <CounterCell element={element4} /> */}
          </div>
        );
      case 'error':
        return (
          <div>
            <p className={classes.title}>Couldn’t load the counters</p>
            <p className={classes.subtitle}>
              The Internet connection appears to be offline.
            </p>
          </div>
        );
    }
  };

  return (
    <div className={classes.root}>
      <SearchBar />
      {mainStateRender()}
      <div className={classes.bottom}>
        <Divider />
        <AddButton />
      </div>
    </div>
  );
};

export default Main;
