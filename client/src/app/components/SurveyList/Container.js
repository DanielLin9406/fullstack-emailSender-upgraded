import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { asyncFetchSurveys } from '@app/modules/survey/survey';
import SurveyList from './SurveyList';

const mapStateToProps = state => ({
  survey: state.survey.survey,
  user: state.auth.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ asyncFetchSurveys }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyList);
