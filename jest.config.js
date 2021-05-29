/** @type {import('@jest/types/build/Config').InitialOptions} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  collectCoverage: true,
  errorOnDeprecated: true,
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      babelConfig: {
        presets: ["power-assert"],
      },
    },
  },
};
