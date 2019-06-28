import { ApolloServer } from 'apollo-server-express';
import { mergedResolvers, mergedTypes, models } from './combined';

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
  uploads: false,
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
        models,
        req
      };
    }
  }
});

export default server;
