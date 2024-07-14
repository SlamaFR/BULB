export const useLine = defineStore('line', () => {
  const mode = ref<Mode>('METRO')
  const index = ref<string>('1')
  const color = ref<string>('#ffcd02')
  const stops = reactive<Stop[]>([
    {
      name: 'La Défense',
      subtitle: 'Grande Arche',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false }, { lineIndex: 'E', walk: false }],
        },
        {
          mode: 'TRAIN',
          walk: false,
          lines: [{ lineIndex: 'L', walk: false }, { lineIndex: 'U', walk: false }],
        },
        {
          mode: 'TRAM',
          walk: false,
          lines: [{ lineIndex: '2', walk: false }],
        },
      ],
    },
    {
      name: 'Esplanade de la Défense',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Pont de Neuilly',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Les Sablons',
      subtitle: 'Jardin d’Acclimatation',
      interestPoint: true,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Porte Maillot',
      subtitle: 'Palais des Congrès',
      interestPoint: true,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'C', walk: false }, { lineIndex: 'E', walk: false }],
        },
        {
          mode: 'TRAM',
          walk: false,
          lines: [{ lineIndex: '3b', walk: false }],
        },
      ],
    },
    {
      name: 'Argentine',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Charles de Gaulle – Étoile',
      subtitle: 'Arc de Triomphe',
      interestPoint: true,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '2', walk: false }, { lineIndex: '6', walk: false }],
        },
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false }],
        },
      ],
    },
    {
      name: 'George V',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Franklin D. Roosevelt',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '9', walk: false }],
        },
      ],
    },
    {
      name: 'Champs-Élysées – Clemenceau',
      subtitle: 'Grand Palais',
      interestPoint: true,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '13', walk: false }],
        },
      ],
    },
    {
      name: 'Concorde',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '8', walk: false }, { lineIndex: '12', walk: false }],
        },
      ],
    },
    {
      name: 'Tuileries',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Palais Royal – Musée du Louvre',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '7', walk: false }],
        },
      ],
    },
    {
      name: 'Louvre – Rivoli',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Châtelet',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [
            { lineIndex: '4', walk: false },
            { lineIndex: '7', walk: false },
            { lineIndex: '11', walk: false },
            {
              lineIndex: '14',
              walk: false,
              ornament: {
                position: 'RIGHT',
                airport: 'ORY',
              },
            },
          ],
        },
        {
          mode: 'RER',
          walk: false,
          lines: [
            { lineIndex: 'A', walk: false },
            {
              lineIndex: 'B',
              walk: false,
              ornament: {
                position: 'BOTTOM',
                airport: 'CDG',
              },
            },
            { lineIndex: 'D', walk: false },
          ],
        },
      ],
    },
    {
      name: 'Hôtel de Ville',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '11', walk: false }],
        },
      ],
    },
    {
      name: 'Saint-Paul',
      subtitle: 'Le Marais',
      interestPoint: true,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Bastille',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '5', walk: false }, { lineIndex: '8', walk: false }],
        },
      ],
    },
    {
      name: 'Gare de Lyon',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [
            {
              lineIndex: '14',
              walk: false,
              ornament: {
                position: 'RIGHT',
                airport: 'ORY',
              },
            },
          ],
        },
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false }, { lineIndex: 'D', walk: false }],
        },
        {
          mode: 'TRAIN',
          walk: false,
          lines: [{ lineIndex: 'R', walk: false }],
        },
        {
          services: [{ service: 'MAIN_STATION' }],
          walk: true,
        },
      ],
    },
    {
      name: 'Reuilly – Diderot',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '8', walk: false }],
        },
      ],
    },
    {
      name: 'Nation',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '2', walk: false }, { lineIndex: '6', walk: false }, { lineIndex: '9', walk: false }],
        },
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false }],
        },
      ],
    },
    {
      name: 'Porte de Vincennes',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'TRAM',
          walk: false,
          lines: [{ lineIndex: '3a', walk: false }, { lineIndex: '3b', walk: false }],
        },
      ],
    },
    {
      name: 'Saint-Mandé',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Bérault',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [],
    },
    {
      name: 'Château\nde Vincennes',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: false,
      connections: [
        {
          mode: 'RER',
          walk: true,
          lines: [{ lineIndex: 'A', walk: false }],
        },
      ],
    },
  ])

  const line = computed<Line>(() => ({
    mode: mode.value,
    index: index.value,
    color: color.value,
    stops,
  }))

  return {
    mode,
    index,
    color,
    stops,
    line,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
