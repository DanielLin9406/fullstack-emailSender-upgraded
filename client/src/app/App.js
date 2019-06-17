import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);
