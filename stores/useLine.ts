export const useLine = defineStore('line', () => {
  const mode = ref<Mode>('METRO')
  const index = ref<string>('1')
  const color = ref<string>('#ffcd02')
  const stops = ref<Stop[]>([
    {
      name: 'La Défense',
      subtitle: 'Grande Arche',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false, ornament: null }, { lineIndex: 'E', walk: false, ornament: null }],
        },
        {
          mode: 'TRAIN',
          walk: false,
          lines: [{ lineIndex: 'L', walk: false, ornament: null }, { lineIndex: 'U', walk: false, ornament: null }],
        },
        {
          mode: 'TRAM',
          walk: false,
          lines: [{ lineIndex: '2', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Esplanade de la Défense',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Pont de Neuilly',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Les Sablons',
      subtitle: 'Jardin d’Acclimatation',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Porte Maillot',
      subtitle: 'Palais des Congrès',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'C', walk: false, ornament: null }, { lineIndex: 'E', walk: false, ornament: null }],
        },
        {
          mode: 'TRAM',
          walk: false,
          lines: [{ lineIndex: '3b', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Argentine',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Charles de Gaulle – Étoile',
      subtitle: 'Arc de Triomphe',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '2', walk: false, ornament: null }, { lineIndex: '6', walk: false, ornament: null }],
        },
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'George V',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Franklin D. Roosevelt',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '9', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Champs-Élysées – Clemenceau',
      subtitle: 'Grand Palais',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '13', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Concorde',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '8', walk: false, ornament: null }, { lineIndex: '12', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Tuileries',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Palais Royal – Musée du Louvre',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '7', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Louvre – Rivoli',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Châtelet',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [
            { lineIndex: '4', walk: false, ornament: null },
            { lineIndex: '7', walk: false, ornament: null },
            { lineIndex: '11', walk: false, ornament: null },
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
            { lineIndex: 'A', walk: false, ornament: null },
            {
              lineIndex: 'B',
              walk: false,
              ornament: {
                position: 'BOTTOM',
                airport: 'CDG',
              },
            },
            { lineIndex: 'D', walk: false, ornament: null },
          ],
        },
      ],
    },
    {
      name: 'Hôtel de Ville',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '11', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Saint-Paul',
      subtitle: 'Le Marais',
      interestPoint: true,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Bastille',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '5', walk: false, ornament: null }, { lineIndex: '8', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Gare de Lyon',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
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
          lines: [{ lineIndex: 'A', walk: false, ornament: null }, { lineIndex: 'D', walk: false, ornament: null }],
        },
        {
          mode: 'TRAIN',
          walk: false,
          lines: [{ lineIndex: 'R', walk: false, ornament: null }],
        },
        {
          services: [{ service: 'MAIN_STATION', ornament: null }],
          walk: true,
        },
      ],
    },
    {
      name: 'Reuilly – Diderot',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '8', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Nation',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'METRO',
          walk: false,
          lines: [{ lineIndex: '2', walk: false, ornament: null }, {
            lineIndex: '6',
            walk: false,
            ornament: null,
          }, { lineIndex: '9', walk: false, ornament: null }],
        },
        {
          mode: 'RER',
          walk: false,
          lines: [{ lineIndex: 'A', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Porte de Vincennes',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'TRAM',
          walk: false,
          lines: [{ lineIndex: '3a', walk: false, ornament: null }, { lineIndex: '3b', walk: false, ornament: null }],
        },
      ],
    },
    {
      name: 'Saint-Mandé',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Bérault',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    },
    {
      name: 'Château\nde Vincennes',
      subtitle: null,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [
        {
          mode: 'RER',
          walk: true,
          lines: [{ lineIndex: 'A', walk: false, ornament: null }],
        },
      ],
    },
  ])

  const line = computed<Line>(() => ({
    mode: mode.value,
    index: index.value,
    color: color.value,
    stops: stops.value,
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
