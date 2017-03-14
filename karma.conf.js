module.exports = function(config) {
  config.set({
    basePath: '',

    port: 9876,
    singleRun: false,
    autoWatch: true,

    concurrency: Infinity,

    colors: true,

    // eslint-disable-next-line max-len
    // logLevel: config.LOG_DISABLE|config.LOG_ERROR|config.LOG_WARN|config.LOG_INFO|config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      'test/**/*-test.js',
      { pattern: 'src/**/*.js', exclude: 'src/app.js' },
    ],
    exclude: [],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*-test.js': ['webpack', 'sourcemap'],
      'src/**/*.js': ['webpack', 'coverage'],
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha', 'coverage'],

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        ],
      },
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
  });
};
