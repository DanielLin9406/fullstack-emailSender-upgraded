import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import user from '../components/user';
import survey from '../components/survey';
import billing from '../components/billing';

const typeDefs = [
  user.userTypeDefs,
  survey.surveyTypeDefs,
  billing.billingTypeDefs
];
const resolvers = [
  user.userResolver,
  survey.surveyResolver,
  billing.billingResolver
];

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(typeDefs, { all: true }),
  resolvers: mergeResolvers(resolvers)
});

const models = {
  User: user.userModel,
  Survey: survey.surveyModel
};

export { schema, models };
