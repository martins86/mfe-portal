module.exports = {
  globalSetup: 'jest-preset-angular/global-setup',
  projects: ['<rootDir>/projects/portal'],
  displayName: 'MFE-PORTAL',
  transformIgnorePatterns: ['^.+\\.js$'],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!**/**.module.ts',
    '!**/**.model.ts',
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'text-summary'],
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
