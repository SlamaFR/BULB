<script setup lang="ts">
</script>

<template>
  <div class="px-25 py-50">
    <Line color="#82C8E6">
      <Stop
        color="#82C8E6"
        name="Porte des Lilas"
        :connections="[
          { mode: 'METRO', lines: ['11'] },
          { mode: 'TRAM', lines: ['3b'] },
        ]"
        terminus
      />
      <Stop
        color="#82C8E6"
        name="Saint-Fargeau"
      />
      <Stop
        color="#82C8E6"
        name="Pelleport"
      />
      <Stop
        color="#82C8E6"
        name="Gambetta"
        :connections="[
          { mode: 'METRO', lines: ['3'] },
        ]"
        terminus
      />
    </Line>
  </div>
  <!--
  <div class="p-20 flex flex-row items-end">
    <StopLabel stop-name="Havre–Caumartin" />
    <StopLabel :stop-name="'Charles-de-Gaulle\nÉtoile'" terminus />
    <StopLabel :stop-name="'Charles-de-Gaulle\nÉtoile'" />
  </div>
  <div class="p-20 flex flex-row gap-3 items-end">
    <Connections
      :connections="[
        { mode: 'METRO', lines: ['3', '12', '13', '14'] },
        { mode: 'RER', lines: ['E'] },
        { mode: 'TRAIN', lines: ['J', 'L'] },
      ]"
    />
  </div>
  <div class="p-20 flex flex-row gap-3 items-end">
    <StopDot color="#82C8E6" />
    <StopDot color="#82C8E6" connection />
    <StopDot color="#82C8E6" terminus />
  </div>
  -->
</template>
