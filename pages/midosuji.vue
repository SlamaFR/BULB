<script setup lang="ts">
</script>

<template>
  <div class="px-25 py-50">
    <Line color="#E5171F">
      <Stop
        color="#E5171F"
        name="江坂"
        :connections="[
          { mode: 'RER', lines: ['A', 'E'] },
          { mode: 'TRAIN', lines: ['L', 'U'] },
          { mode: 'TRAM', lines: ['2'] },
        ]"
        terminus
      />
      <Stop
        color="#E5171F"
        name="東三国"
      />
      <Stop
        color="#E5171F"
        name="Shin-Ōsaka"
      />
      <Stop
        color="#E5171F"
        name="Nishinakajima-Minamigata"
      />
      <Stop
        color="#E5171F"
        name="東三国"
      />
      <Stop
        color="#E5171F"
        :name="'Château\nde Vincennes'"
        :connections="[
          { mode: 'RER', lines: ['A'] },
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
