module.exports = {
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  rootDir: '../',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**', '!./src/gql/types.ts'],
  maxWorkers: 4,
  globalSetup: './.jest/setup.ts'
}
