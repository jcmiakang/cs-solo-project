const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    src: './src/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: './src/index.html',
    }),
  ],
  devServer: {
    // port: 3000, // do I need this?
    // watchContentBase: true, // do I need this?
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
