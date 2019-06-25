import http from 'http';
import app from './src/app';
// import server from './src/apollo';

// server.applyMiddleware({ app, path: '/graphql' });
// Launch http server
http.createServer(app);
