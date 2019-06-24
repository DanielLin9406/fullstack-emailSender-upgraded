import app from './src/app';
import http from 'http';
import server from './src/graphql/apollo';

server.applyMiddleware({ app, path: '/specialUrl' });
// Launch http server
http.createServer(app);
