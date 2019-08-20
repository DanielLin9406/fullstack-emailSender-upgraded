import React, { Suspense } from 'react';
// import logo from '@app/image/data.png';
import { Link } from 'react-router-dom';
import SurveyListView from '@app/components/SurveyList/Container';
import HelmetLayout from '../../layout/helmet/HelmetLayout';
import OneColLayout from '../../layout/oneCol/OneColLayout';
import SurveyProvider from '../../layout/survey/SurveyProvider';

function SurveyPage() {
  return (
    <SurveyProvider>
      <HelmetLayout>
        <OneColLayout>
          <h3>Survey Dashboard</h3>
          <Suspense fallback={<div>Loading </div>}>
            <SurveyListView />
          </Suspense>
          <div className="fixed-action-btn">
            <Link
              to="/surveys/new"
              className="btn-floating btn-large waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
        </OneColLayout>
      </HelmetLayout>
    </SurveyProvider>
  );
}

export default SurveyPage;
