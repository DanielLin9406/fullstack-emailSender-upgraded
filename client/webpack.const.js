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

const API_HOST = {
  production: '',
  stage: '',
  jsonserver: 'localhost',
  dev: 'localhost'
};

const API_PORT = {
  production: '',
  stage: '',
  jsonserver: '8090',
  dev: '5000'
};

const API_VER = {
  production: 'v1',
  stage: 'v1',
  jsonserver: 'v1',
  dev: 'v1'
};

const pubKey = {
  stripe: {
    production: process.env.STRIPE_PUB_KEY_PROD,
    development: process.env.STRIPE_PUB_KEY_DEV
  }
};

export { paths, pubKey, API_HOST, API_PORT, API_VER };
