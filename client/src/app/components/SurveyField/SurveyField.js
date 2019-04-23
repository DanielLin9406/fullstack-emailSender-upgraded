import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const FieldCon = styled.div`
  input:not([type]){
    margin-bottom:0rem;
  }
`

const ErrMsg = styled.div`
  margin-bottom:1.5rem;
`

export default ({label, error, touched, ...props}) => {
  return (
    <div>
      <label>{label}</label>
      <FieldCon>
        <Field {...props} />
      </FieldCon>
      <ErrMsg className="red-text">
        {touched && error}
      </ErrMsg>
    </div>
  )
}