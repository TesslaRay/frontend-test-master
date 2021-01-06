import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {SearchBar} from '../components/searchbar.component';
import {ElementCount} from '../components/elementcount.component';
import {AddButton} from '../components/addbutton.component';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
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
  return (
    <div>
      <SearchBar />
      <ElementCount element={element1} />
      <ElementCount element={element2} />
      <ElementCount element={element3} />
      <ElementCount element={element4} />
      <div className={classes.bottom}>
        <Divider />
        <AddButton />
      </div>
    </div>
  );
};

export default Main;
