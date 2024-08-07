<script setup lang="ts">
const {
  meta,
} = defineProps<{
  meta: Shift
}>()

const lineContext = inject<LineContext>(LineContextKey)

const color = computed(() => lineContext?.color.value ?? '#000000')
</script>

<template>
  <div class="h-3.5em w-10em bg-orange">
    <svg width="100%" height="100%">
      <path d="M 0 56 L 32 56" :stroke="color" stroke-width=".375em" />
    </svg>
  </div>
</template>
