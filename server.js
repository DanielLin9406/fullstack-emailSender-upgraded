import http from 'http';
import app, { bodyParser } from './src/app';
import server from './src/apollo/apollo';
import connectExpress2GraphQL from './src/graphql';

// Method:1 Use express-graphql
connectExpress2GraphQL({ app, bodyParser });

// Method:2 Use Apollo-Server
// server.applyMiddleware({ app, path: '/graphql' });

// Launch http server
http.createServer(app);
