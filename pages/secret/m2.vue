<script setup lang="ts">
</script>

<template>
  <div class="px-25 py-50">
    <Line color="#006db8">
      <Stop
        color="#006db8"
        name="Porte Dauphine"
        :connections="[
          { mode: 'RER', lines: ['C'] },
          { mode: 'TRAM', lines: ['3b'] },
        ]"
        terminus
      />
      <Stop
        color="#006db8"
        name="Victor Hugo"
      />
      <Stop
        color="#006db8"
        :name="'Charles de Gaulle\nÉtoile'"
        place-name="Arc de Triomphe"
        :connections="[
          { mode: 'METRO', lines: ['1', '6'] },
          { mode: 'RER', lines: ['A'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Ternes"
      />
      <Stop
        color="#006db8"
        name="Courcelles"
      />
      <Stop
        color="#006db8"
        name="Monceau"
      />
      <Stop
        color="#006db8"
        name="Villiers"
        :connections="[
          { mode: 'METRO', lines: ['3'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Rome"
      />
      <Stop
        color="#006db8"
        name="Place de Clichy"
        :connections="[
          { mode: 'METRO', lines: ['13'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Blanche"
      />
      <Stop
        color="#006db8"
        name="Pigalle"
        place-name="Moulin Rouge"
        :connections="[
          { mode: 'METRO', lines: ['12'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Anvers"
        place-name="Sacré-Cœur"
      />
      <Stop
        color="#006db8"
        name="Barbès–Rochechouart"
        :connections="[
          { mode: 'METRO', lines: ['4'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="La Chapelle"
        :connections="[
          { mode: 'RER', lines: ['B', 'D', 'E'] },
          { mode: 'TRAIN', lines: ['H', 'K'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Stalingrad"
        :connections="[
          { mode: 'METRO', lines: ['5', '7'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Jaurès"
        :connections="[
          { mode: 'METRO', lines: ['5', '7bis'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Colonel Fabien"
      />
      <Stop
        color="#006db8"
        name="Belleville"
        :connections="[
          { mode: 'METRO', lines: ['11'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Couronnes"
      />
      <Stop
        color="#006db8"
        name="Ménilmontant"
      />
      <Stop
        color="#006db8"
        name="Père Lachaise"
        place-name="Cimetière du Père Lachaise"
        :connections="[
          { mode: 'METRO', lines: ['3'] },
        ]"
      />
      <Stop
        color="#006db8"
        name="Philippe Auguste"
      />
      <Stop
        color="#006db8"
        name="Alexandre Dumas"
      />
      <Stop
        color="#006db8"
        name="Avron"
      />
      <Stop
        color="#006db8"
        name="Nation"
        :connections="[
          { mode: 'RER', lines: ['A'] },
        ]"
        terminus
        last
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
