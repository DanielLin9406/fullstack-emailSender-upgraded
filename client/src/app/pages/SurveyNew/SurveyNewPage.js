import React, { useState } from 'react';

import {
  SurveyForm,
  SurveyFormReview
} from '@app/components/SurveyForm/Container';
import {
  validateBody,
  validateRecipient,
  validateSubject,
  validateTitle
} from '@app/shared/validateForm';
import HelmetLayout from '../../layout/helmet/HelmetLayout';
import OneColLayout from '../../layout/oneCol/OneColLayout';
import SurveyProvider from '../../layout/survey/SurveyProvider';

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

function SurveyNewPage() {
  const [showFormReview, setShowFormReview] = useState(false);
  const [userFormData, setUserFormData] = useState(null);
  const renderContent = () => {
    if (showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => setShowFormReview(false)}
          userFormData={userFormData}
          fieldsData={FIELDS}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => setShowFormReview(true)}
        onSaveUserFormData={data => setUserFormData(data)}
        onResetForm={() => setUserFormData(null)}
        userFormData={userFormData}
        fieldsData={FIELDS}
      />
    );
  };

  return (
    <SurveyProvider>
      <HelmetLayout>
        <OneColLayout>{renderContent()}</OneColLayout>
      </HelmetLayout>
    </SurveyProvider>
  );
}

export default SurveyNewPage;
