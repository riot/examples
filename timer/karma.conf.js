module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-riot'
    ],
    files: [
      'node_modules/expect.js/index.js',
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      '**/*.tag',
      'test/**/*.js'
    ],
    preprocessors: {
      '**/*.tag': ['riot']
    },
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true
  })
}
