module.exports = {
  setupFilesAfterEnv: ['./tools/testSetup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tools/styleMock.js'
  },
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
  coveragePathIgnorePatterns: ['<rootDir>/src/common', '<rootDir>/src/config']
};
