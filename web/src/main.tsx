import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './containers/router';
import {TAppContext} from './common/type/context/app-context';

ReactDOM.render(
  <React.StrictMode>
    <RouteConfig/>
  </React.StrictMode>,
  document.getElementById('root'),
);
