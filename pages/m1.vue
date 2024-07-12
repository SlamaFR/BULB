<script setup lang="ts">
</script>

<template>
  <div class="px-25 py-50">
    <Line color="#ffcd02">
      <Stop
        color="#ffcd02"
        name="La Défense"
        place-name="Grande Arche"
        :connections="[
          { mode: 'RER', lines: ['A', 'E'] },
          { mode: 'TRAIN', lines: ['L', 'U'] },
          { mode: 'TRAM', lines: ['2'] },
        ]"
        terminus
      />
      <Stop
        color="#ffcd02"
        name="Esplanade de la Défense"
      />
      <Stop
        color="#ffcd02"
        name="Pont de Neuilly"
      />
      <Stop
        color="#ffcd02"
        name="Les Sablons"
        place-name="Jardin d’Acclimatation"
      />
      <Stop
        color="#ffcd02"
        name="Porte Maillot"
        place-name="Palais des Congrès"
        :connections="[
          { mode: 'RER', lines: ['C', 'E'] },
          { mode: 'TRAM', lines: ['3b'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Argentine"
      />
      <Stop
        color="#ffcd02"
        name="Charles de Gaulle–Étoile"
        :connections="[
          { mode: 'METRO', lines: ['2', '6'] },
          { mode: 'RER', lines: ['A'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Georges V"
      />
      <Stop
        color="#ffcd02"
        name="Franklin D. Roosevelt"
        :connections="[
          { mode: 'METRO', lines: ['9'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Champs-Élysées–Clemenceau"
        :connections="[
          { mode: 'METRO', lines: ['13'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Concorde"
        :connections="[
          { mode: 'METRO', lines: ['8', '12'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Tuileries"
      />
      <Stop
        color="#ffcd02"
        name="Palais Royal–Musée du Louvre"
        :connections="[
          { mode: 'METRO', lines: ['7'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Louvre–Rivoli"
      />
      <Stop
        color="#ffcd02"
        name="Châtelet"
        :connections="[
          { mode: 'METRO', lines: ['4', '7', '11', '14'] },
          { mode: 'RER', lines: ['A', 'B', 'D'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Hôtel de Ville"
        :connections="[
          { mode: 'METRO', lines: ['11'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Saint-Paul"
        place-name="Le Marais"
      />
      <Stop
        color="#ffcd02"
        name="Bastille"
        :connections="[
          { mode: 'METRO', lines: ['5', '8'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Gare de Lyon"
        :connections="[
          { mode: 'METRO', lines: ['14'] },
          { mode: 'RER', lines: ['A', 'D'] },
          { mode: 'TRAIN', lines: ['R'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Reuilly–Diderot"
        :connections="[
          { mode: 'METRO', lines: ['8'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Nation"
        :connections="[
          { mode: 'METRO', lines: ['2', '6', '9'] },
          { mode: 'RER', lines: ['A'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Porte de Vincennes"
        :connections="[
          { mode: 'TRAM', lines: ['3a', '3b'] },
        ]"
      />
      <Stop
        color="#ffcd02"
        name="Saint-Mandé"
      />
      <Stop
        color="#ffcd02"
        name="Bérault"
      />
      <Stop
        color="#ffcd02"
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
