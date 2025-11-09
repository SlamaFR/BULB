<template>
  <div class="typography">
    <div><slot /></div>
  </div>
</template>

<style scoped lang="scss">
.typography {
  font-family: 'Parisine Ptf', sans-serif;
  line-height: .8em;
  text-wrap: nowrap;
  height: fit-content;
  width: fit-content;
  text-box: trim-both cap alphabetic;

  .debug & {
    outline: 1px solid orange;
  }
}
</style>
