import path from 'path';

export default {
  entry: './src/helloworld.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'helloworld.bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 8000,
    compress: true,
    hot: true,
    proxy: {
      '/': { bypass: () => '/index.html' },
    },
  },
};
