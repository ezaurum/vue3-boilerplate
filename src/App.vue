<template>
  <DefaultLayout></DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"

export default defineComponent({
  name: "App",
  components: { DefaultLayout },
})
</script>
<style lang="scss">
#app {
  @apply flex h-screen w-screen m-0 p-0;
}
</style>
