import packageJSON from './package.json';
import {
  pubKey,
  API_HOST,
  API_PORT,
  API_VER,
  SOCKETIO_HOST,
  SOCKETIO_PORT
} from './webpack.const';

const ENV = process.env.NODE_ENV || 'development';
const API_ENV = process.env.NODE_ENV_API || 'jsonserver';

const VARIABLES = {
  DEBUGGING: false,
  MONITORING: true,
  ENVIRONMENT_NAME: ENV,
  VERSION: packageJSON.version,
  STRIPE_PUB_KEY: pubKey.stripe[ENV],
  API_HOST: API_HOST[API_ENV],
  API_PORT: API_PORT[API_ENV],
  API_VER: API_VER[API_ENV],
  SOCKETIO_HOST: SOCKETIO_HOST[API_ENV],
  SOCKETIO_PORT: SOCKETIO_PORT[API_ENV]
};

const ENV_VARIABLES = {
  production: {
    'process.env.NODE_ENV': 'production',
    'app.env': {
      ...VARIABLES
    }
  },
  development: {
    'process.env.NODE_ENV': 'development',
    'app.env': {
      ...VARIABLES
    }
  }
};

export default {
  name: ENV,
  isDev: ENV === 'development',
  variables: ENV_VARIABLES[ENV]
};
