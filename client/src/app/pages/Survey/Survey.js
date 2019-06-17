import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import logo from '@app/image/data.png';
import { Link } from 'react-router-dom';
import SurveyList from '@app/components/SurveyList/Container';
import HelmetLayout from '../../layout/helmet/HelmetLayout';
import OneColLayout from '../../layout/oneCol/OneColLayout';

class Survey extends Component {
  render() {
    return (
      <HelmetLayout>
        <OneColLayout>
          <h3>Survey Dashboard</h3>
          {/* <img src={logo}></img> */}
          <SurveyList />
          <div className="fixed-action-btn">
            <Link
              to="/surveys/new"
              className="btn-floating btn-large waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
        </OneColLayout>
      </HelmetLayout>
    );
  }
}

export default hot(module)(Survey);
