/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@next-mdx-content/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./examples/*/tsconfig.json",
      "./packages/*/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["examples/nextjs"],
    },
  },
  ignorePatterns: ["*rc.cjs"],
};

module.exports = config;
