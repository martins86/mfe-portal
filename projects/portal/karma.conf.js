import getBaseKarmaConfig from './../../karma.root.conf'

export default function (config) {
  var baseRootConfig = getBaseKarmaConfig()
  config.set({
    ...baseRootConfig,
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/shared-lib'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
      fixWebpackSourcePaths: true,
    },
    logLevel: config.LOG_INFO,
  })
}
