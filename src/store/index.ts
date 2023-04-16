import { defineStore } from "pinia"

export const useStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment(v: number) {
      this.count += v
    },
    async incrementAsync(v: number) {
      await new Promise((resolve) => setTimeout(resolve, 400))
      this.increment(v)
    },
  },
})
