import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { oneOfType, func, bool, arr } from 'prop-types';

class SurveyList extends Component {
  static propTypes = {
    asyncFetchSurveys: func,
    survey: oneOfType([arr, bool])
  };

  componentDidMount() {
    this.props.asyncFetchSurveys();
  }

  renderSurvey() {
    return this.props.survey.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href>Yes: {survey.yes}</a>
            <a href>No: {survey.no}</a>
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
