import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './scenes/router';
import Footer from './components/Footer/Footer';

import './index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router/>
        <Footer/>
      </React.Fragment>
    )
  };
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
