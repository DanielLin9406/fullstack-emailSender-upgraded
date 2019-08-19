import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import { string, bool, any } from 'prop-types';
// import { stringify } from 'querystring';

const FieldCon = styled.div`
  input:not([type]) {
    margin-bottom: 0rem;
  }
`;

const ErrMsg = styled.div`
  margin-bottom: 1.5rem;
`;

const SurveyField = ({ label, error, touched, ...props }) => {
  return (
    <div>
      <label htmlFor="true">{label}</label>
      <FieldCon>
        <Field {...props} />
      </FieldCon>
      <ErrMsg className="red-text">{touched && error}</ErrMsg>
    </div>
  );
};

SurveyField.propTypes = {
  label: string,
  error: any,
  touched: bool
};

export default SurveyField;
