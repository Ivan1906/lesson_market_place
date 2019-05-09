import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const routes = {
  home: '/'
};

function Home() {
  return <div>Home</div>;
};

function NotFound() {
  return <div>404 Not Found</div>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}