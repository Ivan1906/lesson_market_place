import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Api from '../../Api';

function PrivateRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => Api.Auth.isLoggedIn
      ? (<Component {...props}/>)
      : (<Redirect to="/login"/>)}/>
  );
};

export default PrivateRoute;