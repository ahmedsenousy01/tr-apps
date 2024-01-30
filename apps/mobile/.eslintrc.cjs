/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@repo/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["babel.config.js"],
};

module.exports = config;
