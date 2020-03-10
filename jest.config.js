module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./jest.setup.js"],
  coveragePathIgnorePatterns: [
    'src/server/config/app.ts',
    'src/server/config/init.db.ts',
    'src/server/config/orm.config.ts'
  ],
  "testResultsProcessor": "jest-sonar-reporter"
};