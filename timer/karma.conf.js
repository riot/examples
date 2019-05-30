module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter'
    ],
    files: [
      'node_modules/expect.js/index.js',
      'test/**/*.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true
  })
}
