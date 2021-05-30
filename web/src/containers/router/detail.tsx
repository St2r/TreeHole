import React from 'react';
import {Route} from 'react-router';
import DetailPage from '../detail';

export function detailRouteConfig(): JSX.Element {
  return <Route exact path="/detail:id">
    <DetailPage/>
  </Route>;
}
