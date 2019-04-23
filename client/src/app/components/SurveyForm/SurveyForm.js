import React, { Component } from 'react'
import { hot } from "react-hot-loader";
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import SurveyField from '@app/components/SurveyField/Container';

class SurveyForm extends Component {
  render(){
    return (
      <div>
        <Formik
          initialValues={this.props.userFormData || 
            this.props.fieldsData.map(ele => ({[ele.name] :ele.init }))
            .reduce((obj, cur) => Object.assign(obj, cur), {})}
          onSubmit={(values, actions) => {
            this.props.onSurveySubmit();
            this.props.onSaveUserFormData(values);
          }}
        >
          {({errors, touched}) => (
            <Form>
              {this.props.fieldsData.map((field, index) => {
                return (
                  <SurveyField 
                    key={index}
                    label={field.label}
                    type={field.text}
                    name={field.name}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    validate={field.validate}
                  />
                )
              })}
              <Link 
                to="/surveys" 
                className="red btn-flat white-text" 
                onClick={()=>{this.props.onResetForm()}}
              >
                Cancel
              </Link>
              <button 
                className="teal btn-flat right white-text" 
                type="submit"
              >
                Next
                <i className="material-icons right">done</i>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default hot(module)(SurveyForm);