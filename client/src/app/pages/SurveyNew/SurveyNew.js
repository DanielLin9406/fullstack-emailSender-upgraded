import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import {
  SurveyForm,
  ConnectedSurveyFormReview
} from '@app/components/SurveyForm/Container';
import {
  validateBody,
  validateRecipient,
  validateSubject,
  validateTitle
} from '@app/shared/validateForm';
import HelmetLayout from '../../layout/helmet/HelmetLayout';
import OneColLayout from '../../layout/oneCol/OneColLayout';

const FIELDS = [
  {
    label: 'Survey Title',
    type: 'text',
    name: 'title',
    validate: validateTitle,
    init: 'Blast them.'
  },
  {
    label: 'Survey Line',
    type: 'text',
    name: 'subject',
    validate: validateSubject,
    init: 'Blast them hard.'
  },
  {
    label: 'Email Body',
    type: 'text',
    name: 'body',
    validate: validateBody,
    init: 'Body'
  },
  {
    label: 'Recipient List',
    type: 'text',
    name: 'recipients',
    validate: validateRecipient,
    init: 'daniel.lin.190@gmail.com'
  }
];

class SurveyNew extends Component {
  state = {
    showFormReview: false,
    userFormData: null
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ConnectedSurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
          userFormData={this.state.userFormData}
          fieldsData={FIELDS}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
        onSaveUserFormData={data => this.setState({ userFormData: data })}
        onResetForm={() => this.setState({ userFormData: null })}
        userFormData={this.state.userFormData}
        fieldsData={FIELDS}
      />
    );
  }

  render() {
    return (
      <HelmetLayout>
        <OneColLayout>{this.renderContent()}</OneColLayout>
      </HelmetLayout>
    );
  }
}

export default hot(module)(SurveyNew);
