<script setup lang="ts">
import { definePageMeta } from '#imports'
import changelog from '~/assets/changelog.yml'
import useVersion from '~/composables/useVersion'

definePageMeta({
  layout: 'default',
})

const { applicationVersion } = useVersion()
</script>

<template>
  <div class="mt-5 container mx-auto flex flex-col gap-4">
    <h1>{{ $t('ui.changelog.title') }}</h1>

    <Panel v-for="release in (changelog.changelog as Changelog)" :id="release.version" :key="release.version">
      <template #header>
        <div class="flex-grow flex flex-col md:flex-row items-start justify-between">
          <h2 class="version flex flex-row items-center gap-4">
            {{ release.version }}
            <Tag v-if="applicationVersion === release.version" severity="info">
              Version actuelle
            </Tag>
          </h2>
          <h2 class="text-muted">
            {{ $d(new Date(release.date)) }}
          </h2>
        </div>
      </template>
      <div class="flex flex-col gap-4">
        <div v-for="[type, entries] in Object.entries(release.entries ?? {}).sort()" :key="type">
          <h3 class="mb-2">
            {{ $t(`ui.changelog.entries_type.${type}`.toLowerCase()) }}
          </h3>
          <ul>
            <li v-for="(entry, i) in entries" :key="i">
              {{ typeof entry === "string" ? entry : entry.value }}
              <ul v-if="typeof entry !== 'string' && entry.details">
                <li v-for="(detail, j) in entry.details" :key="j" class="text-muted">
                  {{ detail }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Panel>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

h2, .version {
  font-size: 2rem;
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
  font-weight: normal;
}

.text-muted {
  opacity: 75%;
  font-size: .875em;
}

ul {
  list-style-type: disc;
  padding-left: 2em;
}
</style>
