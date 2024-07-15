<template>
  <div class="scroll">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.scroll {
  position: relative;

  & >:last-child {
    padding-right: 1em;
  }

  & >:first-child {
    padding-left: 1em;
  }

  &::before {
    content: '';
    width: 1em;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to left, transparent, var(--p-dialog-background) 1em);
    z-index: 1;
  }

  &::after {
    content: '';
    width: 1em;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(to right, transparent, var(--p-dialog-background) 1em);
    z-index: 1;
  }
}
</style>
