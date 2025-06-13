import type { Preview } from "@storybook/vue3-vite"
import "@/assets/styles/tailwind.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

export const decorators = [
  () => ({
    template: "<div class='p-2'><story /></div>",
  }),
]
