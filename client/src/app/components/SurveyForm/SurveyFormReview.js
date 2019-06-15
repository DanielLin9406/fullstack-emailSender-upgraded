import React from 'react';
import { func, arr } from 'prop-types';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router';

const SurveyFormReview = ({
  onCancel,
  userFormData,
  fieldsData,
  asyncSubmitSurvey,
  history
}) => {
  return (
    <div>
      <h4>Confirm your form entity.</h4>
      {userFormData &&
        fieldsData.map(field => {
          return (
            <div key={field.name}>
              <label htmlFor>{field.label}</label>
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
  asyncSubmitSurvey: func,
  onCancel: func,
  userFormData: arr,
  fieldsData: arr,
  history: arr
};
//

export default hot(module)(withRouter(SurveyFormReview));
