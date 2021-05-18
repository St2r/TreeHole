import React from 'react';
import {Switch, Route, Router} from 'react-router';
import {createBrowserHistory} from 'history';
import MainPage from '../main';
import DetailPage from '../detail';
import UserPage from '../user';

function RouteConfig(): JSX.Element {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/detail" component={DetailPage}/>
        <Route path="/user" component={UserPage}/>
        <Route path="/" component={MainPage}/>
      </Switch>
    </Router>
  );
}

export default RouteConfig;
