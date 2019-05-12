import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

function is4g() {
  return CURRENT_BANDWIDTH == '4g';
}
const RoutesDef = is4g() ? lazy(() => import('./routesdef.jsx')) : lazy(() => import('./lazyroutesdef.jsx'));
function Routes() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <RoutesDef/>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default Routes;
