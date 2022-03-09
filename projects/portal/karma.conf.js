var getBaseKarmaConfig = require('./../../karma.root.conf')

module.exports = function (config) {
  var baseRootConfig = getBaseKarmaConfig()
  config.set({
    ...baseRootConfig,
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
      fixWebpackSourcePaths: true,
    },
    logLevel: config.LOG_INFO,
  })
}
