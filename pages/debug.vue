<script setup lang="ts">
</script>

<template>
  <div class="px-25 py-50 flex flex-col gap-40">
    <div class="flex flex-row gap-40">
      <Line color="#82C8E6">
        <Stop
          color="#82C8E6"
          name="Terminus 1 ligne"
          place-name="Lieu remarquable"
          terminus
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
          place-name="Lieu remarquable"
        />
        <Stop
          color="#82C8E6"
          :name="'Nom très long\nsur 2 lignes'"
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
          place-name="Lieu remarquable avec un nom très long"
        />
        <Stop
          color="#82C8E6"
          :name="'Terminus\n2 lignes'"
          place-name="Lieu remarquable"
          terminus
        />
      </Line>

      <Line color="#82C8E6">
        <Stop
          color="#82C8E6"
          name="Terminus 1 ligne"
          place-name="Lieu remarquable"
          terminus
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
          place-name="Lieu remarquable"
        />
        <Stop
          color="#82C8E6"
          name="Terminus 1 ligne"
          place-name="Lieu remarquable"
          terminus
        />
      </Line>
    </div>

    <div class="flex flex-row gap-40">
      <Line color="#82C8E6">
        <Stop
          color="#82C8E6"
          :name="'Terminus\n2 lignes'"
          place-name="Lieu remarquable"
          terminus
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
          place-name="Lieu remarquable"
        />
        <Stop
          color="#82C8E6"
          :name="'Nom très long\nsur 2 lignes'"
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
          place-name="Lieu remarquable avec un nom très long"
        />
        <Stop
          color="#82C8E6"
          :name="'Terminus\n2 lignes'"
          terminus
        />
      </Line>

      <Line color="#82C8E6">
        <Stop
          color="#82C8E6"
          name="Terminus 1 ligne"
          place-name="Lieu remarquable"
          terminus
        />
        <Stop
          color="#82C8E6"
          name="Nom court"
        />
        <Stop
          color="#82C8E6"
          name="Terminus 1 ligne"
          terminus
        />
      </Line>
    </div>

    <Line color="#82C8E6">
      <Stop
        color="#82C8E6"
        :name="'Terminus\n2 lignes'"
        place-name="Lieu remarquable"
        terminus
      />
      <Stop
        color="#82C8E6"
        name="Nom court"
        place-name="Moulin Rouge"
      />
      <Stop
        color="#82C8E6"
        :name="'Nom très long\nsur 2 lignes'"
      />
      <Stop
        color="#82C8E6"
        :name="'Nom très long\nsur 2 lignes'"
        place-name="Lieu remarquable"
      />
      <Stop
        color="#82C8E6"
        :name="'Nom très long\nsur 2 lignes'"
      />
      <Stop
        color="#82C8E6"
        :name="'Nom très long\nsur 2 lignes'"
        place-name="Lieu remarquable avec un nom très long"
      />
      <Stop
        color="#82C8E6"
        :name="'Terminus\n2 lignes'"
        place-name="Lieu remarquable"
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
