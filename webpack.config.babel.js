import path from 'path';

export default {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'helloworld-app.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 8000,
    compress: true,
    proxy: {
      '/': { bypass: () => '/index.html' },
    },
  },
};
