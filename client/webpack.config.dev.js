import merge from "webpack-merge";
import path from "path";
import webpack from "webpack";
import stringify from 'stringify-object-values'
import OpenBrowserPlugin from 'open-browser-webpack-plugin';

import commonConfig from "./webpack.config.common.js";
import env from "./webpack.env";

const devConfig = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    index: ["react-hot-loader/patch", path.join(__dirname, "src/index.js")]
  },
  output: {
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]"
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true,
          }
        },          
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(stringify(env.variables)),
    new OpenBrowserPlugin({ url:'http://localhost:8080' })
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot:true,
    proxy: {
      "/promotions": "http://localhost:8090",
      "/price": "http://localhost:8090",
      "/auth/google": "http://localhost:5000",
      "/api/*":"http://localhost:5000"
    }
  }
};

export default merge({
  customizeArray(a, b, key) {
    if (key === "entry.index") {
      return b;
    } else {
      return undefined;
    }
  }
})(commonConfig, devConfig);
