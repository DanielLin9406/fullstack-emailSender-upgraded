import http from 'http';
import app, { bodyParser } from './app';
import server from './graphql/apollo';
import activateSocketIo from './socketIo/webSocket';
import connectExpress2GraphQL from './graphql/graphqlExpress';

// Method:1 Launch express server with express-graphql
const activedServer = http.createServer(
  connectExpress2GraphQL({ app, bodyParser })
);
activateSocketIo(activedServer).listen(5001);

// Method:2 Launch apollo server with express
// server.applyMiddleware({ app, path: '/graphql' });
// const activedServer = http.createServer(app);
// activateSocketIo(activedServer).listen(5001);
