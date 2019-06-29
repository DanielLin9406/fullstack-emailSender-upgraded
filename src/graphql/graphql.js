import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { schema, models } from './combined';

const connectExpress2GraphQL = function({ app, bodyParser }) {
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  );
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress((req, res) => {
      return {
        schema,
        context: {
          models,
          req
        }
      };
    })
  );
};

export default connectExpress2GraphQL;
