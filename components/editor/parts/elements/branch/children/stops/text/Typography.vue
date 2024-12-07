<template>
  <div class="typography">
    <div><slot /></div>
  </div>
</template>

<style scoped lang="scss">
.typography {
  font-family: 'Parisine Std', sans-serif;
  line-height: 1em;
  text-wrap: nowrap;
  height: fit-content;
  width: fit-content;

  .debug & {
    outline: 1px solid orange;
  }

  div {
    margin-top: calc(-3em / 16);
  }
}
</style>
