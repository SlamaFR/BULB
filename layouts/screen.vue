<template>
  <div class="min-h-100vh max-h-100vh flex flex-col">
    <div class="layout p-5 gap-5">
      <Topbar />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100%;
  max-height: 100%;
}
</style>
