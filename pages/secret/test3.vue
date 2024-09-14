<script setup lang="ts">
const line: Line = {
  mode: 'METRO',
  index: {
    $builtinLineIndex: {
      mode: 'METRO',
      index: '15',
    },
  },
  color: '#b80b4b',
  lineWidth: 0.375,
  topology: [
    {
      id: '',
      $lineSection: {
        elements: [
          {
            id: '',
            $loop: {
              toward: 'RIGHT',
              linksOffsets: [1.5, -1.5],
            },
          },
          {
            id: '',
            $parallelBranches: {
              alignement: 'FLUID',
              sections: [
                {
                  id: '',
                  $lineSection: {
                    levelOffset: 1.5,
                    elements: [
                      {
                        id: '',
                        $branch: {
                          stopSpacing: 1,
                          stops: [
                            {
                              id: '',
                              name: 'Nanterre – La Folie',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'La Défense',
                              subtitle: 'Grande Arche',
                              preventSubtitleOverlapping: true,
                              interestPoint: true,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Bécon-les-Bruyères',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Bois-Colombes',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Les Agnettes',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Les Grésillons',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Saint-Denis – Pleyel',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Stade de France',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Mairie d’Aubervilliers',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Fort d’Aubervilliers',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Drancy – Bobigny',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Bobigny – Pablo Picasso',
                              subtitle: 'Préfecture – Hôtel du Département',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Pont de Bondy',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Bondy',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Rosny – Bois-Perrier',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Val de Fontenay',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Nogent – Le Perreux',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                          ],
                        },
                      },
                      {
                        id: '',
                        $loop: {
                          toward: 'LEFT',
                          linksOffsets: [0, -3],
                        },
                      },
                    ],
                  },
                },
                {
                  id: '',
                  $lineSection: {
                    levelOffset: -1.5,
                    elements: [
                      {
                        id: '',
                        $branch: {
                          stopSpacing: 1,
                          rightMargin: 6,
                          stops: [
                            {
                              id: '',
                              name: 'Nanterre – La Boule',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Rueil – Suresnes\nMont Valérien',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Saint-Cloud',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Pont de Sèvres',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Issy',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Clamart',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Châtillon\nMontrouge',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Bagneux\nLucie Aubrac',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Arcueil\nCachan',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Villejuif\nGustave-Roussy',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Villejuif\nLouis Aragon',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Mairie de Vitry',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Les Ardoines',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Le Vert de Maisons',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Créteil – L’Échat',
                              subtitle: 'Hôpital Henri Mondor',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Saint-Maur – Créteil',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                            {
                              id: '',
                              name: 'Champigny\nCentre',
                              preventSubtitleOverlapping: true,
                              interestPoint: false,
                              connections: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: '',
      $lineSection: {
        levelOffset: -1.5,
        elements: [
          {
            id: '',
            $branch: {
              stopSpacing: 1,
              leftMargin: 1,
              stops: [
                {
                  id: '',
                  name: 'Villiers – Champigny – Bry',
                  preventSubtitleOverlapping: true,
                  interestPoint: false,
                  connections: [],
                },
                {
                  id: '',
                  name: 'Noisy – Champs',
                  preventSubtitleOverlapping: true,
                  interestPoint: false,
                  connections: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
</script>

<template>
  <div class="flex flex-col gap-15 bg-white text-black p-100 w-fit">
    <Line :line="line" />
  </div>
</template>

<style>
</style>
