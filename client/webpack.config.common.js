import 'dotenv/config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import stringify from 'stringify-object-values';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
import env from './webpack.env';
import { paths } from './webpack.const';

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        include: paths.srcDir
      },
      {
        test: /\.(jpg|png|gif|JPG)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: 'static/assets/images',
            publicPath: 'static/assets/images'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|ttc)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
            outputPath: 'static/assets/fonts',
            publicPath: 'static/assets/fonts'
          }
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/assets/svg',
            publicPath: 'static/assets/svg'
          }
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: env.isDev
            }
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.appHtml
    }),
    new webpack.DefinePlugin(stringify(env.variables)),
    new webpack.HashedModuleIdsPlugin()
  ],
  resolve: {
    alias: {
      '@app/api': paths.apiDir,
      '@app/const': paths.constDir,
      '@app/layout': paths.layoutDir,
      '@app/image': paths.imageDir,
      '@app/components': paths.componentsDir,
      '@app/pages': paths.pagesDir,
      '@app/shared': paths.sharedDir,
      '@app/modules': paths.modulesDir,
      'react-dom': '@hot-loader/react-dom',
      materializeCSS: path.join(
        __dirname,
        'node_modules/materialize-css/dist/css/materialize.min.css'
      )
    }
  }
};

export default commonConfig;
