module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier", // turns off eslint rules that conflict with prettier
  ],
  plugins: ["@typescript-eslint", "only-warn"],
  ignorePatterns: [
    // Ignore dotfiles
    ".*.{cjs,mjs,js}",
    "*.{cjs,mjs,js}",
    "**/*.{cjs,mjs,js}",
    "node_modules/",
    "dist/",
    ".eslintrc.*",
  ],
};
