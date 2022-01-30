const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],

            plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]]
          }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
            test: /\.css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader'
            ]
        }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
     new MiniCssExtractPlugin({
      filename: 'assests[name].css',
     })
  ],
  devServer: {
  static: {
   directory: path.join(__dirname, "dist")
  },
    compress: true,
    port: 8000,
    historyApiFallback: true,
  },
};