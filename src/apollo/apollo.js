import { ApolloServer } from 'apollo-server-express';

import user from '../components/user';
import billing from '../components/billing';
import survey from '../components/survey';

const typeDefs = [user.userSchema];
const resolvers = [user.userResolver];
const models = {
  User: user.userModel,
  Survey: survey.surveyModel
};

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message
    };
  },
  context: ({ req }) => {
    if (req) {
      return {
        models
      };
    }
  }
});

export default server;
