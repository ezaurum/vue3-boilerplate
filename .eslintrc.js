module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/essential", "plugin:vue/vue3-recommended", "plugin:storybook/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  plugins: ["@typescript-eslint"],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-model-argument": "off"
  }
};