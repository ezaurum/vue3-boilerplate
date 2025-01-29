import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  { rules: { "vue/no-multiple-template-root": "off" } },
  { rules: { "vue/no-v-model-argument": "off" } },
  { rules: { "prettier/prettier": "error" } },
  { rules: { "@typescript-eslint/ban-ts-comment": "off" } },
  { rules: { "no-empty-function": "off" } },
  { rules: { "@typescript-eslint/no-empty-function": "off" } },
  { rules: { "vue/no-multiple-template-root": "off" } },
  {
    ignores: [
      "**/node_modules/**",
      "dist",
      "storybook-static",
      ".pnp.*",
      ".yarn/*",
      "!/.yarn/patches",
      "!/.yarn/plugins",
      "!/.yarn/releases",
      "!/.yarn/sdks",
      "!/.yarn/versions",
      ".env.local",
      ".env.*.local",
      "npm-debug.log*",
      "yarn-debug.log*",
      "yarn-error.log*",
      "pnpm-debug.log*",
      ".idea",
      ".vscode",
      "*.suo",
      "*.ntvs*",
      "*.njsproj",
      "*.sln",
      "*.sw?",
      "!/.npmrc",
      "*.log",
      "*.*~",
      "stats.html",
      "pnpm-lock.yaml",
      ".DS_Store",
      ".git",
      ".gitignore",
    ],
  },
]
