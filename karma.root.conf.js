module.exports = function () {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {},
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    thresholds: {
      emitWarning: false,
      global: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
      each: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
    },
    reporters: ['progress', 'coverage', 'kjhtml'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--headless', '--no-sandbox', '--remote-debugging-port=9222'],
      },
    },
    browserDisconnectTolerance: 8,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 20000,
    captureTimeout: 210000,
  }
}
