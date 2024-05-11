<template>
  <h1 class="p-2 border bg-gray-500 text-white hover:text-gray-50 hover:bg-green-300">{{ $t("message.hello") }}</h1>

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
      count: computed(() => store.count),

      // access a mutation
      increment: () => store.increment(1),

      // access an action
      asyncIncrement: () => store.incrementAsync(1),

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
