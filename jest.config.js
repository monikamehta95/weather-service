module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  allowSyntheticDefaultImports: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  coveragePathIgnorePatterns: [
    'src/server/config/app.ts'
  ]
};