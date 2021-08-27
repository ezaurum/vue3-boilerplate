<template>
  <h1>{{ $t("message.hello") }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button class="m-4 p-4 first" type="button" @click="increment">
    count is: {{ count }}
  </button>
  <button class="m-4 p-4" type="button" @click="asyncIncrement">
    count is: {{ count }}
  </button>
  <button class="m-4 p-4 last" type="button" @click="emitIncrement">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "@/store"
import { emitter } from "@/store/PubSub"

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const store = useStore()

    return {
      // typed as number
      count: computed(() => store.state.count),

      // access a mutation
      increment: () => store.commit("increment", 1),

      // access an action
      asyncIncrement: () => store.dispatch("asyncIncrement", 1),

      // emit global event
      emitIncrement: () => emitter.emit("globalIncrement", 1),
    }
  },
  methods: {},
})
</script>
<style lang="scss" scoped>
button {
  color: red;
  background: blue;
  border: 1px solid gray;
  text-shadow: beige 1px 1px 5px, beige -1px -1px 5px, beige 1px -1px 5px,
    beige -1px 1px 5px;

  &.first {
    background: green;
  }

  &.last {
    background: yellow;
  }
}
</style>
