import "webpack-dev-server";
import * as webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

import { dependencies } from "./package.json";

const config: webpack.Configuration = {
  entry: {
    main: "./src/index",
    styled: "styled-components",
  },
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
    runtimeChunk: {
      name: "runtime",
    },
    // splitChunks: {
    //   chunks: "all",
    // },
  },

  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  output: {
    publicPath: "http://localhost:3001/",
    libraryTarget: "system",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.CleanPlugin(),
    new webpack.container.ModuleFederationPlugin({
      remoteType: "system",
      remotes: ["app2"],
      shared: {
        react: {
          import: false,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          import: false,
          requiredVersion: dependencies["react-dom"],
        },
        "styled-components": {
          import: false,
          requiredVersion: dependencies["styled-components"],
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};

export default config;
