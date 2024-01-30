/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@repo/eslint-config"],
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
