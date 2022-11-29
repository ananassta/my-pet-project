const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: "./index.tsx",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: "assets/resource",
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "./assets/favicon.ico",
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
