<script setup lang="ts">
// import type { Connection, ModeConnection } from '~/types'

const connections: (ModeConnection | ServiceConnection)[] = [
  {
    mode: 'METRO',
    lines: [
      { lineIndex: '1' },
      { lineIndex: '2' },
      { lineIndex: '3' },
      { lineIndex: '4' },
    ],
  },
  {
    mode: 'RER',
    lines: [
      { lineIndex: 'A' },
      { lineIndex: 'B' },
      {
        lineIndex: 'C',
        walk: true,
      },
      { lineIndex: 'D' },
      { lineIndex: 'E' },
    ],
  },
  {
    mode: 'RER',
    lines: [
      {
        lineIndex: 'B',
        ornament: {
          position: 'BOTTOM',
          text: 'Gare du Nord',
        },
      },
    ],
  },
  {
    mode: 'RER',
    walk: true,
    lines: [
      {
        lineIndex: 'B',
        ornament: {
          position: 'RIGHT',
          text: 'Gare\ndu Nord',
        },
      },
    ],
  },
  {
    mode: 'METRO',
    lines: [
      {
        lineIndex: '14',
        ornament: {
          position: 'RIGHT',
          airport: 'ORY',
        },
      },
    ],
  },
  {
    mode: 'TRAM',
    lines: [
      { lineIndex: '1' },
      { lineIndex: '2' },
      { lineIndex: '3a' },
      {
        lineIndex: '11',
        ornament: {
          position: 'RIGHT',
          airport: 'GENERIC',
        },
      },
    ],
  },
  {
    mode: 'TRAIN',
    lines: [
      { lineIndex: 'J' },
      { lineIndex: 'N' },
    ],
  },
  {
    services: [
      {
        service: 'MAIN_STATION',
        ornament: {
          position: 'RIGHT',
          text: 'Gare\nde Lyon',
        },
      },
    ],
    walk: true,
  },
]

const chatelet: (ModeConnection | ServiceConnection)[] = [
  {
    mode: 'METRO',
    lines: [
      { lineIndex: '1' },
      { lineIndex: '4' },
      { lineIndex: '7' },
      { lineIndex: '11' },
      {
        lineIndex: '14',
        ornament: {
          position: 'RIGHT',
          airport: 'ORY',
        },
      },
    ],
  },
  {
    mode: 'RER',
    lines: [
      { lineIndex: 'A' },
      {
        lineIndex: 'B',
        walk: true,
        ornament: {
          position: 'BOTTOM',
          airport: 'CDG',
        },
      },
      { lineIndex: 'D' },
    ],
  },
]
</script>

<template>
  <div class="pt-30 p-10 flex flex-row gap-10">
    <Line color="red">
      <Stop
        :name="'L’Enfer\nsur Terre'"
        :connections="connections"
        terminus
      />
      <Stop
        name="Châtelet – Les Halles"
        :connections="chatelet"
      />
      <Stop
        name="Anvers"
        subtitle="Sacré-Cœur"
        subtitle-interest-point
        :connections="[
          {
            services: [
              {
                service: 'FUNICULAR',
                ornament: {
                  position: 'BOTTOM',
                  text: 'Funiculaire\nde Montmartre',
                },
              },
            ],
            walk: true,
          },
        ]"
      />
    </Line>
  </div>
</template>

<style>
.test-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5em;
}

.width-one {
  height: 1em;
  width: 1em;
  background-color: red;
}

.width-two {
  height: 1em;
  width: 2.5em;
  background-color: blue;
  grid-column: span 2;
}

.width-two-vertical {
  height: 2.5em;
  width: 1em;
  background-color: blue;
  grid-row: span 2;
}
</style>
