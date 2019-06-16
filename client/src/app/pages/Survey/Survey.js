import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import logo from '@app/image/data.png';
import { Link } from 'react-router-dom';
import SurveyList from '@app/components/SurveyList/Container';
import BaseLayout from '../../layout/base/BaseLayout';

class Survey extends Component {
  render() {
    return (
      <BaseLayout>
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
      </BaseLayout>
    );
  }
}

export default hot(module)(Survey);
