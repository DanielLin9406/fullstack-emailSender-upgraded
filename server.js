import http from 'http';
import app, { bodyParser } from './src/app';
import server from './src/graphql/apollo';
import connectExpress2GraphQL from './src/graphql/graphqlExpress';

// Method:1 Launch express server with express-graphql
http.createServer(connectExpress2GraphQL({ app, bodyParser }));

// Method:2 Launch apollo server with express
// server.applyMiddleware({ app, path: '/graphql' });
// http.createServer(app);
