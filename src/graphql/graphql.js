import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { mergedTypes, mergedResolvers, models } from './combined';
// import mergedSchema from './graphql-compose';

const mergedSchema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

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
        schema: mergedSchema,
        context: {
          models,
          req
        }
      };
    })
  );
};

export default connectExpress2GraphQL;
