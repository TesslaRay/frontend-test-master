import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './screen/main';
import Welcome from './screen/welcome';
import CreateItem from './screen/createitem';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/create">
          <CreateItem />
        </Route>
      </Switch>
    </Router>
  );
}
