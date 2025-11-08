<script setup lang="ts">
const { value } = defineProps<{
  value: string
}>()
</script>

<template>
  <div class="flex flex-row items-center h-1em">
    <Typography class="title">
      {{ value }}
    </Typography>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: var(--blue-ratp-paper);
  font-weight: bold;
}

span {
  line-height: .9375em;
  margin-top: -.1875em;
  margin-right: .0625em;
  text-wrap: nowrap;
  height: fit-content;
}
</style>
