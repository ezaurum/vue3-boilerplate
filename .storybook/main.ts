import type { StorybookConfig } from "@storybook/vue3-vite"
import { resolve } from "path"

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {},
  features: {},
  async babel() {
    return { presets: ["@babel/preset-env", "@babel/preset-typescript"] }
  },
  viteFinal: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: any
  ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    }
    return config
  },
} as StorybookConfig
