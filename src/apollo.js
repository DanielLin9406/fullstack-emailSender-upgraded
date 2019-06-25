import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
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
  context: ({ connection }) => {
    if (connection) {
      return {
        models,
        loaders
      };
    }
  }
});

module.exports = server;
