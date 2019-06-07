module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-riot'
    ],
    files: [
      '**/*.tag',
      'test/**/*.js'
    ],
    preprocessors: {
      options: {
        type: 'es6'
      },
      '**/*.tag': ['riot']
    },
    browsers: ['ChromeHeadless'],
    reporters: ['mocha']
  })
}
