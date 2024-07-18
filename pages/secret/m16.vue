<script setup lang="ts">
const line: Line = {
  mode: 'METRO',
  index: '16',
  color: '#f59fb3',
  stops: [
    {
      name: 'Saint-Denis – Pleyel',
      subtitle: 'Stade de France',
      interestPoint: true,
      connections: [
        {
          mode: 'METRO',
          lines: [
            {
              lineIndex: '14',
              ornament: {
                position: 'BOTTOM',
                airport: 'ORY',
              },
            },
            { lineIndex: '15' },
            { lineIndex: '17' },
            { lineIndex: '13', walk: true },
          ],
        },
        {
          mode: 'RER',
          walk: true,
          lines: [
            { lineIndex: 'D' },
          ],
        },
      ],
    },
    {
      name: 'La Courneuve – Six Routes',
      connections: [
        {
          mode: 'METRO',
          lines: [
            { lineIndex: '17' },
          ],
        },
        {
          mode: 'TRAM',
          lines: [
            { lineIndex: '1' },
          ],
        },
      ],
    },
    {
      name: 'Le Bourget',
      connections: [
        {
          mode: 'METRO',
          lines: [
            { lineIndex: '7' },
            { lineIndex: '17' },
          ],
        },
        {
          mode: 'TRAM',
          lines: [
            { lineIndex: '11' },
          ],
        },
        {
          mode: 'RER',
          lines: [
            {
              lineIndex: 'B',
              ornament: {
                position: 'RIGHT',
                airport: 'CDG',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Parc du Blanc-Mesnil',
    },
    {
      name: 'Aulnay – Val Francilia',
    },
    {
      name: 'Sevran – Beaudottes',
      connections: [
        {
          mode: 'RER',
          lines: [
            {
              lineIndex: 'B',
              ornament: {
                position: 'RIGHT',
                airport: 'CDG',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Sevran – Livry',
      connections: [
        {
          mode: 'RER',
          lines: [
            {
              lineIndex: 'B',
              ornament: {
                position: 'RIGHT',
                airport: 'CDG',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Clichy – Montfermeil',
      connections: [
        {
          mode: 'TRAM',
          lines: [
            { lineIndex: '4' },
          ],
        },
      ],
    },
    {
      name: 'Chelles – Gournay',
      connections: [
        {
          mode: 'RER',
          lines: [
            { lineIndex: 'E' },
          ],
        },
        {
          mode: 'TRAIN',
          lines: [
            { lineIndex: 'P' },
          ],
        },
      ],
    },
    {
      name: 'Noisy – Champs',
      connections: [
        {
          mode: 'METRO',
          lines: [
            { lineIndex: '11' },
            { lineIndex: '15' },
          ],
        },
        {
          mode: 'RER',
          lines: [
            { lineIndex: 'A' },
          ],
        },
      ],
    },
  ],
}
</script>

<template>
  <LineMap :line="line" />
  <!-- <div class="px-25 py-50">
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
  </div> -->
</template>
