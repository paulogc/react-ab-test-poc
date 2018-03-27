module.exports = {
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: [
    'src/containers/**/*.{js,jsx}',
    'src/components/**/*.{js,jsx}',
    'src/redux-flow/reducers/**/*.{js}',
    'src/redux-flow/actions/**/*.{js}',
    'src/redux-flow/logics/**/*.{js}',
    '!**src/redux-flow/reducers/index.js**',
    '!**src/redux-flow/logics/index.js**',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
