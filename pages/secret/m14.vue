<script setup lang="ts">
</script>

<template>
  <div class="px-10 py-40">
    <Line color="#662c91">
      <Stop
        name="Saint-Denis – Pleyel"
        :connections="[
          { mode: 'METRO', lines: ['13', '15', '16', '17'] },
          { mode: 'RER', lines: ['D'], walk: true },
        ]"
        terminus
      />
      <Stop
        name="Mairie de Saint-Ouen"
        subtitle="Région Île-de-France"
        :connections="[
          { mode: 'METRO', lines: ['13'] },
        ]"
      />
      <Stop
        name="Saint-Ouen"
        :connections="[
          { mode: 'RER', lines: ['C'] },
        ]"
      />
      <Stop
        name="Porte de Clichy"
        subtitle="Tribunal de Paris"
        :prevent-subtitle-overlap="false"
        :connections="[
          { mode: 'METRO', lines: ['13'] },
          { mode: 'RER', lines: ['C'] },
          { mode: 'TRAM', lines: ['3b'] },
        ]"
      />
      <Stop
        name="Pont Cardinet"
        :connections="[
          { mode: 'TRAIN', lines: ['L'], walk: true },
        ]"
      />
      <Stop
        name="Saint-Lazare"
        :connections="[
          { mode: 'METRO', lines: ['3', '9', '12', '13'] },
          { mode: 'RER', lines: ['E'] },
          { mode: 'TRAIN', lines: ['J', 'L'] },
          { mode: 'TER' },
        ]"
      />
      <Stop
        name="Madeleine"
        :connections="[
          { mode: 'METRO', lines: ['8', '12'] },
        ]"
      />
      <Stop
        name="Pyramides"
        :connections="[
          { mode: 'METRO', lines: ['7'] },
        ]"
      />
      <Stop
        name="Châtelet"
        :connections="[
          { mode: 'METRO', lines: ['1', '4', '7', '11'] },
          { mode: 'RER', lines: ['A', 'B', 'D'] },
        ]"
      />
      <Stop
        name="Gare de Lyon"
        :connections="[
          { mode: 'METRO', lines: ['1'] },
          { mode: 'RER', lines: ['A', 'D'] },
          { mode: 'TRAIN', lines: ['R'] },
          { mode: 'TER' },
        ]"
      />
      <Stop
        name="Bercy"
        :connections="[
          { mode: 'METRO', lines: ['6'] },
          { mode: 'TER' },
        ]"
      />
      <Stop
        name="Cour Saint-Émilion"
      />
      <Stop
        name="Bibliothèque François Mitterrand"
        :connections="[
          { mode: 'RER', lines: ['C'] },
          { mode: 'TRAM', lines: ['3a'], walk: true },
        ]"
      />
      <Stop
        name="Olympiades"
      />
      <Stop
        name="Maison Blanche"
        :connections="[
          { mode: 'METRO', lines: ['7'] },
          { mode: 'TRAM', lines: ['3a'], walk: true },
        ]"
      />
      <Stop
        name="Hôpital Bicêtre"
      />
      <Stop
        name="Villejuif – Gustave Roussy"
      />
      <Stop
        name="L’Haÿ-les-Roses"
      />
      <Stop
        name="Chevilly-Larue"
        subtitle="Marché International"
        :connections="[
          { mode: 'TRAM', lines: ['7'] },
        ]"
      />
      <Stop
        name="Thiais – Orly"
        subtitle="Pont de Rungis"
        :prevent-subtitle-overlap="false"
        :connections="[
          { mode: 'RER', lines: ['C'] },
        ]"
      />
      <Stop
        name="Aéroport d’Orly"
        :connections="[
          { mode: 'TRAM', lines: ['7'] },
        ]"
        terminus
      />
    </Line>
  </div>
</template>
