import React from 'react';
import {compose, withHandlers} from 'recompose';
import Header from '../../components/Header/Header';

function Login({onClick}) {
  return (
    <React.Fragment>
      <Header theme="light"/>
      <div className="center">
        <button onClick={onClick}>Login</button>
      </div>
    </React.Fragment>
  );
};

const enhance = compose(withHandlers({
  onClick: props => event => {
    console.log(props);
    console.log(event);
  }
}));

export const EnhanceLogin = enhance(Login);