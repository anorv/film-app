module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/__tests__/**/*.+(js|jsx|ts|tsx)', '**/?(*.)+(spec|test).+(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!esm)'],
};
