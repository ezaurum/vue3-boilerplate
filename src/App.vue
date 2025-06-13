<template>
  <div class="p-2">APP</div>
  <p
    class="text-2xl flex justify-center items-center animate__animated animate__heartBeat animate__infinite"
  >
    {{ store.app.name }}
  </p>
  <main>
    {{ t("cancel") }}
    <p>{{ t("confirm") }}</p>
    <HelloWorld></HelloWorld>
  </main>
</template>

<script lang="ts" setup>
import { t } from "@/i18n"
import { useStore } from "@/store"
import HelloWorld from "@/components/HelloWorld.vue"

const store = useStore()
</script>

<style lang="scss" scoped>
main {
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
}
</style>
