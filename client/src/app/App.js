import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import Routes from './routes';
import SocketClient from './components/SocketClient/Container';

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <Routes />
        <SocketClient />
      </div>
    );
  }
}

export default hot(module)(App);
