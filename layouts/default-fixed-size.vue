<template>
  <div class="layout">
    <Topbar />
    <slot />
  </div>
</template>

<style lang="scss">
body, #__nuxt {
  min-height: 100vh;
}
</style>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: .5rem;
  padding: .5rem;
  height: 100vh;
}

@media (max-width: 1024px) {
  .layout {
    min-height: 100vh;
    height: auto;
  }
}
</style>
