import { composeWithMongoose } from 'graphql-compose-mongoose/node8'; // need graphql-compose
import { schemaComposer } from 'graphql-compose';

import surveyModel from './surveyModel';

const customizationOptions = {};
const SurveyTC = composeWithMongoose(surveyModel);

schemaComposer.Query.addFields({
  current_user: SurveyTC.getResolver('findById')
});

const surveySchema = schemaComposer.buildSchema();

// Export a executable schema
export default surveySchema;
