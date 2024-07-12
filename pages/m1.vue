<script setup lang="ts">
const line: Line = {
  mode: 'METRO',
  index: '1',
  color: '#ffcd02',
  stops: [
    {
      name: 'La Défense',
      subtitle: 'Grande Arche',
      interestPoint: true,
      connections: [
        {
          mode: 'RER',
          lines: [{ lineIndex: 'A' }, { lineIndex: 'E' }],
        },
        {
          mode: 'TRAIN',
          lines: [{ lineIndex: 'L' }, { lineIndex: 'U' }],
        },
        {
          mode: 'TRAM',
          lines: [{ lineIndex: '2' }],
        },
      ],
    },
    {
      name: 'Esplanade de la Défense',
    },
    {
      name: 'Château\nde Vincennes',
      connections: [
        {
          mode: 'RER',
          lines: [{ lineIndex: 'A' }],
          walk: true,
        },
      ],
    },
  ],
}
</script>

<template>
  <LineMap :line="line" />
</template>
