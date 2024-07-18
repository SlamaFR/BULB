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
      name: 'Pont de Neuilly',
    },
    {
      name: 'Les Sablons',
      subtitle: 'Jardin d’Acclimatation',
      interestPoint: true,
    },
    {
      name: 'Porte Maillot',
      subtitle: 'Palais des Congrès',
      interestPoint: true,
      connections: [
        {
          mode: 'RER',
          lines: [{ lineIndex: 'C' }, { lineIndex: 'E' }],
        },
        {
          mode: 'TRAM',
          lines: [{ lineIndex: '3b' }],
        },
      ],
    },
    {
      name: 'Argentine',
    },
    {
      name: 'Charles de Gaulle – Étoile',
      subtitle: 'Arc de Triomphe',
      interestPoint: true,
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '2' }, { lineIndex: '6' }],
        },
        {
          mode: 'RER',
          lines: [{ lineIndex: 'A' }],
        },
      ],
    },
    {
      name: 'George V',
    },
    {
      name: 'Franklin D. Roosevelt',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '9' }],
        },
      ],
    },
    {
      name: 'Champs-Élysées – Clemenceau',
      subtitle: 'Grand Palais',
      interestPoint: true,
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '13' }],
        },
      ],
    },
    {
      name: 'Concorde',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '8' }, { lineIndex: '12' }],
        },
      ],
    },
    {
      name: 'Tuileries',
    },
    {
      name: 'Palais Royal – Musée du Louvre',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '7' }],
        },
      ],
    },
    {
      name: 'Louvre – Rivoli',
    },
    {
      name: 'Châtelet',
      connections: [
        {
          mode: 'METRO',
          lines: [
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
              ornament: {
                position: 'BOTTOM',
                airport: 'CDG',
              },
            },
            { lineIndex: 'D' },
          ],
        },
      ],
    },
    {
      name: 'Hôtel de Ville',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '11' }],
        },
      ],
    },
    {
      name: 'Saint-Paul',
      subtitle: 'Le Marais',
      interestPoint: true,
    },
    {
      name: 'Bastille',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '5' }, { lineIndex: '8' }],
        },
      ],
    },
    {
      name: 'Gare de Lyon',
      connections: [
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
          mode: 'RER',
          lines: [{ lineIndex: 'A' }, { lineIndex: 'D' }],
        },
        {
          mode: 'TRAIN',
          lines: [{ lineIndex: 'R' }],
        },
        {
          services: [{ service: 'MAIN_STATION' }],
        },
      ],
    },
    {
      name: 'Reuilly – Diderot',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '8' }],
        },
      ],
    },
    {
      name: 'Nation',
      connections: [
        {
          mode: 'METRO',
          lines: [{ lineIndex: '2' }, { lineIndex: '6' }, { lineIndex: '9' }],
        },
        {
          mode: 'RER',
          lines: [{ lineIndex: 'A' }],
        },
      ],
    },
    {
      name: 'Porte de Vincennes',
      connections: [
        {
          mode: 'TRAM',
          lines: [{ lineIndex: '3a' }, { lineIndex: '3b' }],
        },
      ],
    },
    {
      name: 'Saint-Mandé',
    },
    {
      name: 'Bérault',
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
