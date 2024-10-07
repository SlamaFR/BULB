<script setup lang="ts">
const spacer = defineModel<Spacer>({ required: true })
const length = computed(() => `calc(${spacer.value.$spacer.size} * 1em)`)
const showPropertiesDialog = ref(false)
</script>

<template>
  <div class="dynamic-part branch-element-handle spacer" :data-id="spacer.id" @click="showPropertiesDialog = true">
    <div class="export-hide">
      <div />
    </div>
  </div>

  <SpacerPropertiesDialog
    v-model:visible="showPropertiesDialog"
    v-model="spacer"
  />
</template>

<style scoped lang="scss">
.spacer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2em;
  min-height: 5em;
  width: calc(1em + v-bind(length));
  padding: .25em;
  margin: 0 calc(-.25em - 1px);
  border-radius: .25em;
  background-color: transparent;
  z-index: 2;

  transition: background-color .2s ease;
  &:hover {
    background-color: color-mix(in srgb, var(--p-slate-300), transparent 50%);
  }

  > div {
    position: relative;
    width: 100%;
    height: 1em;
    border-left: 2px solid var(--p-slate-500);
    border-right: 2px solid var(--p-slate-500);
    opacity: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter .2s ease;

    &:before {
      content: '';
      position: absolute;
      left: .0625em;
      top: 50%;
      border-top: 2px solid var(--p-slate-400);
      border-left: 2px solid var(--p-slate-400);
      width: .5em;
      height: .5em;
      transform: translateY(-50%) rotate(-45deg);
      z-index: -1;
    }

    &:after {
      content: '';
      position: absolute;
      right: .0625em;
      top: 50%;
      border-top: 2px solid var(--p-slate-400);
      border-right: 2px solid var(--p-slate-400);
      width: .5em;
      height: .5em;
      transform: translateY(-50%) rotate(45deg);
      z-index: -1;
    }

    > div {
      border: 1px dashed var(--p-slate-400);
      width: 100%;
    }
  }
}
</style>
