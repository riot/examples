module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-html2js-preprocessor'
    ],
    files: [
      'node_modules/mocha/mocha.js',
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/expect.js/index.js',
      'node_modules/riot/riot+compiler.js',
      'test/specs.js',
      '**/*.tag'
    ],
    preprocessors: {
      '**/*.tag': ['html2js']
    },
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    singleRun: true
  })
}
