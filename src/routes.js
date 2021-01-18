import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './screen/main/main.index';
import Welcome from './screen/welcome/welcome.index';
import CreateItem from './screen/create_item/createitem.index';
import ExampleScreen from './screen/example/example.index';

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
        <Route path="/example">
          <ExampleScreen />
        </Route>
      </Switch>
    </Router>
  );
}
