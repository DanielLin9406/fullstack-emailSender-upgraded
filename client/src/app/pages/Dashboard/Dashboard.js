import React, { Component } from 'react'
import { hot } from "react-hot-loader";
import logo from '@app/image/data.png';
import { Link } from 'react-router-dom';
import SurveyList from '@app/components/SurveyList/Container';

class Dashboard extends Component {
  render(){
    return (
      <div>
        <h3>Dashboard</h3>
        {/* <img src={logo}></img> */}
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    )
  }
}

export default hot(module)(Dashboard);