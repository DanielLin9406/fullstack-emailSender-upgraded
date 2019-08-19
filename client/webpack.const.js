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
const url = {
  servedUrl: '/',
  pgInternalApiUrl: {
    production: 'https://intrapi.positivegrid.com/v2',
    stage: 'https://pg-beta-intrapi.herokuapp.com/v2',
    apiDoc: 'http://localhost:7000/v2',
    jsonserver: 'http://localhost:8090',
    dev: 'http://localhost:5000'
  }
};

const pubKey = {
  stripe: {
    production: 'pk_test_PjuoNpPOVWYdA2izgIRyuIlz00l2VBCmnE',
    development: 'pk_test_PjuoNpPOVWYdA2izgIRyuIlz00l2VBCmnE'
  }
};

export { paths, url, pubKey };
