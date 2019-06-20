import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { oneOfType, func, bool, array, object } from 'prop-types';

class SurveyList extends Component {
  static propTypes = {
    asyncFetchSurveys: func,
    survey: oneOfType([array]),
    user: oneOfType([bool, object])
  };

  componentDidMount() {
    this.props.asyncFetchSurveys();
  }

  renderSurvey() {
    return this.props.survey.reverse().map(surveyItem => {
      return (
        <div className="card darken-1" key={surveyItem._id}>
          <div className="card-content">
            <span className="card-title">{surveyItem.title}</span>
            <p>{surveyItem.body}</p>
            <p className="right">
              Sent On: {new Date(surveyItem.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="true">Yes: {surveyItem.yes}</a>
            <a href="true">No: {surveyItem.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurvey()}</div>;
  }
}

export default hot(module)(SurveyList);
