/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@repo/eslint-config", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
