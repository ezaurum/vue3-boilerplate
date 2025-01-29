import { defineStore } from "pinia"

export const useStore = defineStore("main", {
  state: () => ({
    app: {
      name: "Vite Vue3 Typescript",
    },
  }),
})
