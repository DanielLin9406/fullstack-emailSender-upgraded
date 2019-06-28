import http from 'http';
import app, { bodyParser } from './src/app';
import server from './src/graphql/apollo';
import connectExpress2GraphQL from './src/graphql/graphql';
import passport from './src/libs/auth/passport'; // Must after Mongoose User schema has been registered.

// Must after cookieSession
// Extend passport to app level from router level
app.use(passport.initialize());
app.use(passport.session());

// Method:1 Use express-graphql
// connectExpress2GraphQL({ app, bodyParser });

// Method:2 Use Apollo-Server
// 使用apollo server時，又會遇到passport沒有讀數的問題，因為又用server在往外面包一層了
server.applyMiddleware({ app, path: '/graphql' });

// Launch http server
http.createServer(app);
