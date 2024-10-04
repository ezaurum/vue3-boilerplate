import type { Preview } from "@storybook/vue3"
import "@/assets/tailwind.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

export const decorators = [
  () => ({
    template: "<div style='padding: 2rem'><story /></div>",
  }),
]
