# Email Sender Upgraded

[![Build Status](https://travis-ci.org/DanielLin9406/fullstack-emailSender-upgraded.svg?branch=master)](https://travis-ci.org/DanielLin9406/fullstack-emailSender-upgraded)

Upgraded version of a email promotion and monitor system based on [Stephergrinder's email sender](https://github.com/StephenGrider/FullstackReactCode). Solely to practice the cutting edge tech stack.

## Features

### Client

Tech perspective:

- React-redux version
- React-hooks version
- Use Webpack-dev-server to proxy all api services and websocket connection.
- Use express as static file server in production and handle websocket connection.

### API

Tech perspective:

- A express project in company with graphql+socket.io
- A express project in company with apollo-server+socket.io
- Separate Express 'app' and 'server'.
- Update api service file structure from technical role to self-contained components.
- Refractor api service from common.js to ES6 import syntax

## Prerequisite

- Node v10.16
- npm v6.9

### Client

```bash
# ./client/.env

STRIPE_PUB_KEY_DEV=<Stripe Public Key>
STRIPE_PUB_KEY_PROD=<Stripe Public Key>
CLIENT_HOST=localhost
CLIENT_PORT=8080
SOCKETIO_HOST=localhost
SOCKETIO_PORT=5001
API_HOST=localhost
API_PORT=5000
API_VER=v1
DOCKER=false
```

### API

```bash
# ./api/.env

PORT=5000
CLIENT_ID_DEV=<Google OAuth 2 Client Id>
CLIENT_ID_PROD=<Google OAuth 2 Client Id>
CLIENT_SECRET_DEV=<Google OAuth 2 Secret>
CLIENT_SECRET_PROD=<Google OAuth 2 Secret>
CALLBACK_URI=/auth/google/callback
COOKIE_KEY_DEV=<Define your own cookie key>
COOKIE_KEY_PROD=<Define your own cookie key>
DATABASE_URL_DEV=<MongoDB Altas full Url>
DATABASE_URL_PROD=<MongoDB Altas full Url>
STRIPE_PUB_KEY=<Stripe Public Key>
STRIPE_SECRET_KEY=<Stripe Secret Key>
SENDGRID_KEY=<Sengrid Key>
REDIRECT_DOMAIN=http://localhost:8080
SOCKETIO_PORT=5001

```

## Start Project

### Method 1: docker-compose

This method is easy.
Open browser and go to http://localhost:3050.
You can see the dashboard.

### Method 2: npm script

If you want to do it with purely npm command, there are more additional setup:

1. Install Dependence of services

```bash
# ./ @project root
# ./client
# ./api

npm i
```

2. Start Project

```bash
# ./ @project root
npm start
```

3. Check result

Open browser and go to http://localhost:8080.

### More Slient Start Script

```bash
# ./client @project root
# with JSON Mock server (only get data is available )
npm run start:jsonserver

# with other server on same localhost but port
# Need to start server first
npm run start:dev
```

## Build Project and Run Production version

You also have two ways to run production version:

```bash
# Method 1. In project root (Highly Recommonded)
docker-compose -f docker-compose-stage.yml up

# Method 2. In project root
(TODO)See below details
```

### Method 1: docker-compose

This method is easy.
Open browser and go to http://localhost:3060.
You can see the dashboard.

### Method 2: npm script

1. Run Production Bbuild

```bash
# ./ @project root
# Use Babel to complie import syntax to require
npm run build
```

2. Run Production Server

```bash
# ./ @project root
# Use Babel to complie import syntax to require
npm run prod
```

3. Check result

Open browser and go to http://localhost:8080.

### More Client Build Script

```bash
# ./client
# with other localhost API server in different port
npm run build:dev

# stage as API server
npm run build:stage

# production as API server
npm run build:prod
```

## TechStacks

### Client

- Webpack 4 custom scaffold
- Babel 7
- React 16 with hooks
- Redux-thunk
- React-Router 4
- React Hot loader
- React-Loadable for async loading page
- Redux with module pattern
- (TODO) Jest+puppeteer for unit test
- WebSocket by Socket.io client
- Husky+Lint-stage
- ESlint+Prettier
- Sensitive data handler: dotenv

### API

- Babel node for compiling ES6 syntax
- Express.js
- Restful API
- Mocha+Chi for unit test
- WebSocket by Socket.io
- GraphQL by express-graphql or apollo-server
- Mongoose
- MongoDB Altas
- Sensitive data handler: dotenv

### Dev-Ops

- Docker
- Docker-compose
- Nginx as reverse-proxy
- Bash 5 for development

### Cloud - Heroku with Docker

- (TODO)Heroku

## History

- origin/initial: Initial full-stack version with docker.
- origin/hooks: Modify /client component to function component and implement hooks
- origin/rolebased: Modify /api file structure from technical role to self-contained components.
- origin/master: Final full-stack project with dev-ops pipeline.

## License
