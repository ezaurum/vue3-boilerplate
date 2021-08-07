// https://next.vuex.vuejs.org/guide/typescript-support.html#typing-store-property-in-vue-component
import { InjectionKey, State } from "vue"
import { createStore, Store, useStore as baseUseStore } from "vuex"

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, v) {
      state.count += v
    },
  },
  actions: {
    asyncIncrement({ commit }, v) {
      setTimeout(() => {
        commit("increment", v)
      }, 1000)
    },
  },
})

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore<State>(key)
}
