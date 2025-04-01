module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.js',
      '!src/app.js',
      '!**/node_modules/**',
      '!**/coverage/**'
    ],
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70
      }
    },
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testTimeout: 30000
  };