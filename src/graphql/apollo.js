import { ApolloServer } from 'apollo-server-express';
import { schema, models } from './combined';

const server = new ApolloServer({
  introspection: true,
  // 使用apollo server時，開啟以解決使用passport認證存取的問題
  playground: { settings: { 'request.credentials': 'include' } },
  schema,
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
