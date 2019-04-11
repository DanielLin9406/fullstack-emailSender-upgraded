import React, { Component } from 'react'
import { hot } from "react-hot-loader";

class Home extends Component {
  render(){
    return (
      <div>
        <a href='/auth/google'> Sign In </a>
      </div>
    )
  }
}

export default hot(module)(Home);