export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/**/*.d.ts',
    '!src/stitches.ts',
    '!src/*.tsx',
    '!src/styles/**/*',
    '!src/testUtils/*.ts'
    // '!src/**/index.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest']
  },
  moduleNameMapper: {
    '^\\@/(.*)': '<rootDir>/src/$1'
  }
};
