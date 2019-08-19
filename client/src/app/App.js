import { hot, setConfig } from 'react-hot-loader';
import React, { Component } from 'react';
import Routes from './routes';
import AuthProvider from './layout/auth/AuthProvider';

setConfig({ pureSFC: true });

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div id="app" className="container">
          <Routes />
        </div>
      </AuthProvider>
    );
  }
}

export default hot(module)(App);
