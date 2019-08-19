import React, { useEffect, useContext } from 'react';
import SurveyContext from '../../layout/survey/SurveyContext';

function SurveyList() {
  const { createAsyncFetchSurveys, survey, dispatch } = useContext(
    SurveyContext
  );
  const asyncFetchSurveys = createAsyncFetchSurveys(dispatch);

  useEffect(() => {
    asyncFetchSurveys();
  }, []);

  const renderSurvey = () => {
    return survey.reverse().map(surveyItem => {
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
  };
  return <div>{renderSurvey()}</div>;
}

export default SurveyList;
