import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { func, shape, arrayOf } from 'prop-types';

import SurveyField from '@app/components/SurveyField/Container';

function SurveyForm({
  userFormData,
  fieldsData,
  onSurveySubmit,
  onSaveUserFormData,
  onResetForm
}) {
  return (
    <div>
      <Formik
        initialValues={
          userFormData ||
          fieldsData
            .map(ele => ({ [ele.name]: ele.init }))
            .reduce((obj, cur) => Object.assign(obj, cur), {})
        }
        onSubmit={values => {
          onSurveySubmit();
          onSaveUserFormData(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {fieldsData.map(field => {
              return (
                <SurveyField
                  key={field.name}
                  label={field.label}
                  type={field.text}
                  name={field.name}
                  error={errors[field.name]}
                  touched={touched[field.name]}
                  validate={field.validate}
                />
              );
            })}
            <Link
              to="/surveys"
              className="red btn-flat white-text"
              onClick={() => {
                onResetForm();
              }}
            >
              Cancel
            </Link>
            <button className="teal btn-flat right white-text" type="submit">
              Next
              <i className="material-icons right">done</i>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

SurveyForm.propTypes = {
  onSurveySubmit: func,
  onSaveUserFormData: func,
  onResetForm: func,
  userFormData: shape({}),
  fieldsData: arrayOf(shape({}))
};

export default SurveyForm;
