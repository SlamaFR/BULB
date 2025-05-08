<script lang="ts" setup>
const {
  label,
  icon,
} = defineProps<{
  label: string
  icon: string
}>()
</script>

<template>
  <div class="toolbox-item">
    <div class="item hidden">
      <div class="flex flex-col items-center">
        <i :class="icon" />
        <span>{{ label }}</span>
      </div>
    </div>
    <div class="preview h-full flex items-center">
      <slot name="actual-element" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbox-item {
  cursor: grab;
  background-color: white;
  border: 1px solid var(--p-slate-200);
  border-radius: .375rem;
  min-width: 5rem;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  span {
    font-size: 1rem;
    user-select: none;
  }

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }

  & .item {
    display: block;
  }

  & .preview {
    display: none;
  }
}
</style>
