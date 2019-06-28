import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import user from '../components/user';
import survey from '../components/survey';

const typeDefs = [user.userTypeDefs, survey.surveyTypeDefs];
const resolvers = [user.userResolver, survey.surveyResolver];

const mergedTypes = mergeTypes(typeDefs, { all: true });
const mergedResolvers = mergeResolvers(resolvers);

const models = {
  User: user.userModel,
  Survey: survey.surveyModel
};

export { mergedTypes, mergedResolvers, models };
