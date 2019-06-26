import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './schema';

const connectExpress2GraphQL = function({ app, bodyParser }) {
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  );
  app.use('/graphql', bodyParser.json(), (req, res) => {
    return graphqlExpress({ schema, context: req.user })(req, res);
  });
};

export default connectExpress2GraphQL;
