import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Welcome from './screen/welcome';
import Main from './screen/main';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

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

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    // TODO: its Router the bette way to do this??
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,

  document.querySelector('#root'),
);
