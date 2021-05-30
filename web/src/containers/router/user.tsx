import React from 'react';
import {Route} from 'react-router';
import UserPage from '../user-page';

export function userRouteConfig(): JSX.Element {
  return <Route exact path="/user:id">
    <UserPage/>
  </Route>;
}
