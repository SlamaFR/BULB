<template>
  <div class="picto">
    <div class="layer1" />
  </div>
</template>

<style scoped lang="scss">
.picto {
  position: relative;
  min-width: 1em;
  min-height: 1em;

  .layer1 {
    mask: url(assets/svg/modes/boat.svg) no-repeat center;
    background-color: var(--blue-ratp-paper);
    mask-size: contain;
  }

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
