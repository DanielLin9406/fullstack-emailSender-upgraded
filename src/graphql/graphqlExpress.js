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
      // console.log('req', req._passport.session);
      return {
        schema,
        context: {
          models,
          req,
          user: req.user
        }
      };
    })
  );
  return app;
};

export default connectExpress2GraphQL;
