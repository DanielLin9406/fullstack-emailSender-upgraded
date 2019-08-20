import React, { useMemo, useContext } from 'react';
import SurveyContext from '../../layout/survey/SurveyContext';

function readSurveyList() {
  const {
    createAsyncFetchSurveys,
    survey,
    loadingPromise,
    loading,
    dispatch
  } = useContext(SurveyContext);
  const asyncFetchSurveys = createAsyncFetchSurveys(dispatch);

  const cacheSurvey = useMemo(() => survey, [survey]);

  const loaded = loadingPromise && !loading;
  if (loaded) return cacheSurvey;
  if (loadingPromise) throw loadingPromise;

  const promise = asyncFetchSurveys();
  dispatch({
    type: 'LOAD_LIST',
    loadingPromise: promise
  });
  throw promise;
}

function SurveyListView() {
  const surveyList = readSurveyList();
  const renderSurvey = () => {
    return surveyList.reverse().map(surveyItem => {
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

export default SurveyListView;
