import type { StorybookConfig } from "@storybook/vue3-vite"
export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
  },
  async babel(options: any) {
    return { presets: ["@babel/preset-env", "@babel/preset-typescript"] }
  },
} as StorybookConfig
