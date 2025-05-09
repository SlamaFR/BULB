<template>
  <div class="toolbox-sep">
    <span class="sep" />
  </div>
</template>

<style scoped lang="scss">
.toolbox-sep {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 1em .75em;

  .sep {
    height: 100%;
    width: 2px;
    border-radius: 2px;
    background: var(--p-gray-400);
  }
}
</style>
