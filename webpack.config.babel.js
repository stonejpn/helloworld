import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'helloworld-app.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/material-design-lite/material.min.css', to: 'vendor' },
      { from: 'node_modules/material-design-lite/material.min.js', to: 'vendor' },
    ]),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'template/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: 8000,
    compress: true,
    proxy: {
      '/': {
        bypass: () => { return '/index.html'; },
      },
    },
  },
};
