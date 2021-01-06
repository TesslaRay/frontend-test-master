import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar/searchbar.component';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () => fetch('/api/v1/counter', {method: 'get'}).then((res) => res.json());

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

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,

  document.querySelector('#root'),
);
