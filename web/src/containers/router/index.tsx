import React from 'react';
import {Switch, Route, Router, Redirect} from 'react-router';
import {createBrowserHistory} from 'history';
import MainPage from '../main';
import MainLayout from '../layout/main-layout';
import {detailRouteConfig} from './detail';
import {userRouteConfig} from './user';
import LoginPage from '../passport/login';
import RegisterPage from '../passport/register';
import PostPage from '../post';

function RouteConfig(): JSX.Element {
  const history = createBrowserHistory();
  const tabs = ['all', 'feed', 'xxx', 'ooo'];

  return (
    <Router history={history}>
      <Route path={'/'}>
        <MainLayout>
          <Switch>
            <Route path={'/passport'}>
              <Switch>
                <Route path={'/passport/login'} exact component={LoginPage}/>
                <Route path={'/passport/register'} exact component={RegisterPage}/>
              </Switch>
            </Route>
            <Route path={'/post'} exact component={PostPage}/>
            {detailRouteConfig()}
            {userRouteConfig()}
            {tabs.map(((value, index) => {
              return <Route key={index} exact path={'/' + value}>
                <MainPage/>
              </Route>;
            }))}
          </Switch>
          <Route path={'/**'}>
            <Redirect to={{pathname: '/all'}}/>
          </Route>
        </MainLayout>
      </Route>
    </Router>
  );
}

export default RouteConfig;
