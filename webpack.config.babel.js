import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HTMLWebpackTemplate from 'html-webpack-template';

const extractSass = new ExtractTextPlugin('app.css');

export default {
  entry: {
    'helloworld-app': './src/app.jsx',
    style: './style/app.scss',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: extractSass.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }) },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/material-design-lite/material.min.js', to: 'vendor' },
    ]),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      hash: true,
      inject: false,
      template: HTMLWebpackTemplate,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
      title: 'Hello world!!',
      meta: { charset: 'UTF-8' },
      mobile: true,
      links: ['https://fonts.googleapis.com/icon?family=Material+Icons'],
      appMountId: 'app-root',
      scripts: ['/vendor/material.min.js'],
    }),
    extractSass,
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
