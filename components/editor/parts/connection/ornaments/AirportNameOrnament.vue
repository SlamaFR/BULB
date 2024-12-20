<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="bg-red airport-name">
    <Typography class="airport-name-label">
      {{ name }}
    </Typography>
  </div>
</template>

<style scoped lang="scss">
.airport-name {
  height: 1em;
  margin-left: -.25em;
  padding: 0 .1875em;
  background-color: #414241;
  border-top-right-radius: .0625em;
  border-bottom-right-radius: .0625em;
  display: flex;
  align-items: center;
  line-height: 1em;

  .airport-name-label {
    font-size: .625em;
    font-weight: 600;
    color: #ffce00;
  }
}
</style>
