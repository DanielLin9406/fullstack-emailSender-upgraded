import { hot } from "react-hot-loader";
import React, { Component } from "react";
import Pages from './pages';

import Header from "./components/Header/Container";

class App extends Component {
  componentDidCatch(error, info) {

  }
  render() {
    return (
      <div id="app" className="container">
        <Header />
        <Pages />
      </div>
    );
  }
}

export default hot(module)(App);
