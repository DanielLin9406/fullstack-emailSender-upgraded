import React, { useContext } from 'react';
import { func, arr } from 'prop-types';
import { withRouter } from 'react-router';
import AuthContext from '../../layout/auth/AuthContext';

const SurveyFormReview = ({ onCancel, userFormData, fieldsData, history }) => {
  const { dispatch, createAsyncSubmitSurvey } = useContext(AuthContext);
  const asyncSubmitSurvey = createAsyncSubmitSurvey(dispatch);

  return (
    <div>
      <h4>Confirm your form entity.</h4>
      {userFormData &&
        fieldsData.map(field => {
          return (
            <div key={field.name}>
              <label htmlFor="true">{field.label}</label>
              <div>{userFormData[field.name]}</div>
            </div>
          );
        })}

      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        className="green btn-flat right"
        onClick={() => {
          asyncSubmitSurvey(userFormData, history);
        }}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

SurveyFormReview.propTypes = {
  onCancel: func,
  userFormData: arr,
  fieldsData: arr,
  history: arr
};

export default withRouter(SurveyFormReview);
