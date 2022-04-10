module.exports = {
  globalSetup: 'jest-preset-angular/global-setup',
  projects: ['<rootDir>/projects/portal'],
  transformIgnorePatterns: ['^.+\\.js$'],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!**/**.module.ts',
    '!**/**.model.ts',
  ],
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/coverage',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/coverage',
        outputName: 'mfe-portal-app.xml',
      },
    ],
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
