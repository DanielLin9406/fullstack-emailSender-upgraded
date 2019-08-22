import merge from 'webpack-merge';
import path from 'path';
// import OpenBrowserPlugin from 'open-browser-webpack-plugin';

import commonConfig from './webpack.config.common';

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')]
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  // For notice docker to hot reload
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]'
              }
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true
          }
        }
      }
    ]
  },
  plugins: [
    // new OpenBrowserPlugin({ url:'http://localhost:8080' })
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    proxy: {
      '/auth/google': `http://${process.env.API_HOST}:${process.env.API_PORT}`,
      '/api/*': `http://${process.env.API_HOST}:${process.env.API_PORT}/v1`,
      '/socket.io': {
        target: `http://${process.env.SOCKETIO_HOST}:${process.env.SOCKETIO_PORT}`,
        ws: true
      }
    }
  }
};

export default merge(commonConfig, devConfig);
