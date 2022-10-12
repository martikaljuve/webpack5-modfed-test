import * as webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

import { dependencies } from "./package.json";

const shared = Object.entries(dependencies).reduce((acc, [dep, version]) => {
  acc[dep] = {
    import: false,
    requiredVersion: version,
  };
  return acc;
}, {});

const config: webpack.Configuration = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

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
      shared,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};

export default config;
