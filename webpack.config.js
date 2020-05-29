const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const path = require('path');

module.exports = ({ mode = 'production' }) => {
  return webpackMerge(
    {
      mode,
      context: __dirname,
      entry: './src/App.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
      },
      plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.ProgressPlugin(),
      ],
      devServer: {
        publicPath: '/dist/',
        historyApiFallback: true,
        port: 3000,
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json'],
      },
      stats: {
        colors: true,
        reasons: true,
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
          },
        ],
      },
    },
    modeConfig(mode)
  );
};
