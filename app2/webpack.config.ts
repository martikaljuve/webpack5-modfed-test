import "webpack-dev-server";
import * as webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

import { dependencies } from "./package.json";

const config: webpack.Configuration = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  devServer: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  optimization: {
    minimize: false,
    // splitChunks: {
    //   chunks: "all",
    // },
  },

  output: {
    publicPath: "http://localhost:3002/",
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

  /**
   * NOTE: Webpack "externals" are also added as deps in the remoteEntry.js, which is suboptimal.
   *   System.register(["styled-components"], ...)
   */
  // externals: ["styled-components"],

  plugins: [
    new webpack.CleanPlugin(),
    new webpack.container.ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      library: { type: "system" },
      remoteType: "system",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: {
          import: false, // NOTE: `false` means webpack will not create a fallback chunk with this dependency
          requiredVersion: dependencies["react"],
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
