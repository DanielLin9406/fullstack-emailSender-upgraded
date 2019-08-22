import path from 'path';

const rootDir = path.join(__dirname, './');
const paths = {
  rootDir,
  buildDir: path.join(rootDir, 'build'),
  srcDir: path.join(rootDir, 'src'),
  apiDir: path.join(rootDir, 'src/api'),
  appJs: path.join(rootDir, 'src/index.js'),
  sharedDir: path.join(rootDir, 'src/shared'),
  assetsDir: path.join(rootDir, 'src/assets'),
  imageDir: path.join(rootDir, 'src/assets/image'),
  publicDir: path.join(rootDir, 'src/assets/public'),
  componentsDir: path.join(rootDir, 'src/app/components'),
  constDir: path.join(rootDir, 'src/app/const'),
  pagesDir: path.join(rootDir, 'src/app/pages'),
  layoutDir: path.join(rootDir, 'src/app/layout'),
  routesDir: path.join(rootDir, 'src/app/routes'),
  modulesDir: path.join(rootDir, 'src/modules'),
  nodeModulesDir: path.join(rootDir, 'node_modules'),
  appHtml: path.join(rootDir, 'src/assets/templates/index.html'),
  webpackVisualizerHtml: 'report/webpack-visualizer.html'
};

const SOCKETIO_PORT = {
  prod: process.env.SOCKETIO_PORT,
  stage: process.env.SOCKETIO_PORT,
  jsonserver: 'localhost',
  dev: process.env.SOCKETIO_PORT
};

const SOCKETIO_HOST = {
  prod: process.env.SOCKETIO_HOST,
  stage: process.env.SOCKETIO_HOST,
  jsonserver: 'localhost',
  dev: process.env.SOCKETIO_HOST
};

const API_HOST = {
  prod: process.env.API_HOST,
  stage: process.env.API_HOST,
  jsonserver: 'localhost',
  dev: process.env.API_HOST
};

const API_PORT = {
  prod: process.env.API_PORT,
  stage: process.env.API_PORT,
  jsonserver: '8090',
  dev: process.env.API_PORT
};

const API_VER = {
  prod: process.env.API_VER,
  stage: process.env.API_VER,
  jsonserver: 'v1',
  dev: process.env.API_VER
};

const pubKey = {
  stripe: {
    production: process.env.STRIPE_PUB_KEY_PROD,
    development: process.env.STRIPE_PUB_KEY_DEV
  }
};

export {
  paths,
  pubKey,
  API_HOST,
  API_PORT,
  API_VER,
  SOCKETIO_HOST,
  SOCKETIO_PORT
};
