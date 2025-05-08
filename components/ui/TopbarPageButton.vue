<script setup lang="ts">
import { navigateTo, useRoute } from '#app'

const {
  label,
  icon,
  to,
  size = 'small',
} = defineProps<{
  label: string
  icon: string
  to: string
  size?: 'small' | 'large'
}>()

const route = useRoute()
</script>

<template>
  <Button
    :label="label"
    :icon="icon"
    :text="route.path !== to"
    rounded
    :size="size"
    severity="secondary"
    pt:label:class="text-nowrap"
    pt:root:class="justify-start"
    @click="navigateTo(to)"
  />
</template>
