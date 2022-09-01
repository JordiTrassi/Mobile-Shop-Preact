module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(preact|@testing-library)/)'],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/'
    ],
    moduleFileExtensions: [
      'js',
      'jsx'
    ],
    moduleDirectories: [
      'node_modules'
    ],
    moduleNameMapper: {
      '^react$':     'preact/compat',
      '^react-dom$': 'preact/compat'
    },
    setupFiles: [
      '<rootDir>/jest.setup.js'
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
    moduleNameMapper: {
      '^react$': 'preact/compat',
      '^react-dom/test-utils$': 'preact/test-utils',
      '^react-dom$': 'preact/compat',
      '^react/jsx-runtime$': 'preact/jsx-runtime'
  },
    
}