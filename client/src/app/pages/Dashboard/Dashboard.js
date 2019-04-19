import React, { Component } from 'react'
import { hot } from "react-hot-loader";
import logo from '@app/image/data.png';

class Dashboard extends Component {
  render(){
    return (
      <div>
        <h2>Dashboard</h2>
        <img src={logo}></img>
      </div>
    )
  }
}

export default hot(module)(Dashboard);