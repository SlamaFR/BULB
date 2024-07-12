<script setup lang="ts">
</script>

<template>
  <div class="px-25 py-50">
    <Line color="#f59fb3">
      <Stop
        name="Saint-Denis – Pleyel"
        :connections="[
          { mode: 'METRO', lines: ['14', '15', '17'] },
          { mode: 'RER', lines: ['D'] },
        ]"
        terminus
      />
      <Stop
        name="La Courneuve – Six Routes"
        :connections="[
          { mode: 'METRO', lines: ['17'] },
          { mode: 'TRAM', lines: ['1'] },
        ]"
      />
      <Stop
        name="Le Bourget"
        :connections="[
          { mode: 'METRO', lines: ['7', '17'] },
          { mode: 'TRAM', lines: ['11'] },
          { mode: 'RER', lines: ['B'] },
        ]"
      />
      <Stop
        name="Parc du Blanc-Mesnil"
      />
      <Stop
        name="Aulnay – Val Francilia"
      />
      <Stop
        name="Sevran – Beaudottes"
        :connections="[
          { mode: 'RER', lines: ['B'] },
        ]"
      />
      <Stop
        name="Sevran – Livry"
        :connections="[
          { mode: 'RER', lines: ['B'] },
        ]"
      />
      <Stop
        name="Clichy – Montfermeil"
        :connections="[
          { mode: 'TRAM', lines: ['4'] },
        ]"
      />
      <Stop
        name="Chelles – Gournay"
        :connections="[
          { mode: 'RER', lines: ['E'] },
          { mode: 'TRAIN', lines: ['P'] },
        ]"
      />
      <Stop
        name="Noisy – Champs"
        :connections="[
          { mode: 'METRO', lines: ['11', '15'] },
          { mode: 'RER', lines: ['A'] },
        ]"
        place-name="Cité Descartes"
        terminus
      />
    </Line>
  </div>
</template>
