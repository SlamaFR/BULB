<script setup lang="ts">
function getIcon(severity: string, detail?: { icon: string }) {
  if (detail?.icon) return detail.icon
  if (severity === 'success') return 'i-tabler-circle-check-filled'
  if (severity === 'info') return 'i-tabler-info-circle-filled'
  if (severity === 'warn') return 'i-tabler-alert-triangle-filled'
  return 'i-tabler-alert-circle-filled'
}
</script>

<template>
  <Toast
    position="bottom-right"
    pt:root:class="important-bottom-1"
    :pt="{
      transition: {
        enterFromClass: 'toast-enter-from',
        enterActiveClass: 'toast-enter-active',
        leaveActiveClass: 'toast-leave-active',
        leaveToClass: 'toast-leave-to',
      },
    }"
  >
    <template #container="{ message: { detail, severity, summary } }">
      <div class="content">
        <i :class="getIcon(severity, detail)" class="text-xl" />
        <span class="summary">
          {{ $t(summary) }}
        </span>
        <span v-if="detail" class="detail">
          {{ $t(detail) }}
        </span>
      </div>
    </template>
  </Toast>
</template>

<style lang="scss">
:root {
  --p-toast-warn-background: color-mix(in srgb, var(--p-yellow-50), transparent 25%);
  --p-toast-warn-border-color: var(--p-yellow-200);
  --p-toast-warn-color: var(--p-yellow-600);
  --p-toast-error-background: color-mix(in srgb, var(--p-red-50), transparent 25%);
  --p-toast-error-border-color: var(--p-red-200);
  --p-toast-error-color: var(--p-red-600);
  --p-toast-info-background: color-mix(in srgb, var(--p-blue-50), transparent 25%);
  --p-toast-info-border-color: var(--p-blue-200);
  --p-toast-info-color: var(--p-blue-600);
  --p-toast-success-background: color-mix(in srgb, var(--p-green-50), transparent 25%);
  --p-toast-success-border-color: var(--p-green-200);
  --p-toast-success-color: var(--p-green-600);
  --p-toast-blur: 10px;
}

.dark-mode:root {
  --p-toast-warn-background: color-mix(in srgb, var(--p-yellow-900), transparent 25%);
  --p-toast-warn-border-color: var(--p-yellow-900);
  --p-toast-warn-color: var(--p-yellow-100);
  --p-toast-error-background: color-mix(in srgb, var(--p-red-900), transparent 25%);
  --p-toast-error-border-color: var(--p-red-900);
  --p-toast-error-color: var(--p-red-100);
  --p-toast-info-background: color-mix(in srgb, var(--p-blue-900), transparent 25%);
  --p-toast-info-border-color: var(--p-blue-900);
  --p-toast-info-color: var(--p-blue-100);
  --p-toast-success-background: color-mix(in srgb, var(--p-green-900), transparent 25%);
  --p-toast-success-border-color: var(--p-green-900);
  --p-toast-success-color: var(--p-green-100);
}
</style>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.25rem 1em;
  align-items: center;
  padding: .75em;

  .summary {
    font-weight: bold;
  }

  .detail {
    font-size: .875em;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .close {
    grid-column-start: 3;
    grid-column-end: 4;
  }
}
</style>

<style lang="scss">
.toast-enter-active,
.toast-leave-active{
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(150%);
}
.toast-leave-to {
  opacity: 0;
}
</style>
