module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '\\.(js|jsx|ts|tsx|vue)$': '<rootDir>/scripts/jest/jest.transformer.js'
  },
  collectCoverageFrom: ['!**/__tests__/**']
}
