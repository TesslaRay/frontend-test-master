import React from 'react';
import ReactDOM from 'react-dom';

import {SearchBar} from './components/searchbar.component';
import {AddButton} from './components/addbutton.component';
import {ElementCount} from './components/elementcount.component';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch('/api/v1/counter', {method: 'get'}).then((res) => res.json());

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF9500',
    },
  },
  typography: {
    fontFamily: 'Avenir Next',
    fontSize: 11,
  },
});

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

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <div>
      <SearchBar />
      {/* <AddButton /> */}
      <ElementCount element={element1} />
      <ElementCount element={element2} />
      <ElementCount element={element3} />
      <ElementCount element={element4} />
      <Divider />
      <AddButton />
    </div>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,

  document.querySelector('#root'),
);
