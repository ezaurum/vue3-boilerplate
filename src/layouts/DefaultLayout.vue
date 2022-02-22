<template>
  <main>
    <header role="group">
      <router-view name="state"></router-view>
    </header>
    <nav class="border-r border-red" role="navigation">
      <router-view name="navigation"></router-view>
    </nav>
    <section border-t border-black role="main">
      <router-view />
    </section>
    <footer role="group"></footer>
  </main>
</template>

<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
$headerHeight: 4rem;
$footerHeight: 4rem;
$navigationWidth: 10rem;

main {
  @apply grid h-full w-full;

  grid-template-areas:
    "header header"
    "navigation content"
    "navigation footer";
  grid-auto-rows: $headerHeight auto $footerHeight;
  grid-auto-columns: $navigationWidth auto;

  header {
    @apply border border-black;

    grid-area: header;
  }

  section[role="main"] {
    grid-area: content;
  }

  nav {
    grid-area: navigation;
  }

  footer {
    grid-area: footer;
  }
}
</style>
