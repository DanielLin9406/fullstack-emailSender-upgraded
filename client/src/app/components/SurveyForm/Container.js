import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { asyncSubmitSurvey } from '../../../modules/auth/auth';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ asyncSubmitSurvey }, dispatch);

const ConnectedSurveyFormReview = connect( null, mapDispatchToProps)(SurveyFormReview);
export { SurveyForm, ConnectedSurveyFormReview };
