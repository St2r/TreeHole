import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './containers/router';
import ContextWrapper from './containers/context';

ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <RouteConfig/>
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
