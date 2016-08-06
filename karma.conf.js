module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      'test/fixtures/fixture.html',
      'test/index.js',
    ],
    plugins: [
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-html2js-preprocessor',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
    ],
    preprocessors: {
      'test/fixtures/fixture.html': ['html2js'],
      'test/index.js': ['webpack'],
    },
    proxies: {
      '/test/fixtures/': '/base/test/fixtures/',
    },
    reporters: ['mocha'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015'],
              plugins: ['babel-plugin-espower'],
            },
          },
        ],
      },
    },
  })
}
