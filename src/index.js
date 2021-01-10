import React from 'react';
import ReactDOM from 'react-dom';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import {primary, secondary} from './utils/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },

  typography: {
    fontFamily: 'Avenir Next',
    fontSize: 11,
  },
});

const App = () => {
  return <Routes />;
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,

  document.querySelector('#root'),
);
