/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@repo/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
