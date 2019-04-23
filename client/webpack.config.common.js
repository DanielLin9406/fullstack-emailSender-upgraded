import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import env from './webpack.env';
import { paths } from "./webpack.const";

const babelOptions = {
  presets: [
    [
      "@babel/preset-env",{
        "modules": false,
      }
    ],
    "@babel/preset-react"
  ],
  plugins:[
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-runtime",
    "react-hot-loader/babel"
  ],
  cacheDirectory: true
}

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: babelOptions
        },
        include: paths.srcDir
      },
      {
        test: /\.(jpg|png|gif|JPG)$/,
        use: {
          loader: "url-loader",
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
          loader: "url-loader",
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
          loader: "svg-url-loader",
          options:{
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
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
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
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: paths.appHtml
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  resolve: {
    alias: {
      '@app/api': paths.apiDir,
      '@app/const': paths.constDir,
      '@app/layout': paths.layoutDir,
      '@app/image': paths.imageDir,
      '@app/components':paths.componentsDir,
      '@app/pages': paths.pagesDir,
      '@app/shared': paths.sharedDir,
      'react-dom': '@hot-loader/react-dom',
      materializeCSS: path.join(__dirname, 'node_modules/materialize-css/dist/css/materialize.min.css')
    }
  }
};

export default commonConfig;
