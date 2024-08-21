<script setup lang="ts">
const line: Line = {
  index: {
    $builtinLineIndex: {
      mode: 'METRO',
      index: '7bis',
    },
  },
  mode: 'METRO',
  color: '#77c696',
  lineWidth: 0.375,
  topology: [
    {
      id: '1',
      $lineSection: {
        elements: [
          /*
          {
            id: '2',
            $branch: {
              stopSpacing: 8,
              stops: [
                {
                  id: '3',
                  name: 'Louis Blanc',
                  interestPoint: false,
                  preventSubtitleOverlapping: true,
                  connections: [
                    {
                      id: '',
                      $modeConnection: {
                        mode: 'METRO',
                        walk: false,
                        elements: [
                          {
                            id: '',
                            $modeConnectionElement: {
                              lineIndex: {
                                $builtinLineIndex: {
                                  mode: 'METRO',
                                  index: '7',
                                },
                              },
                              walk: false,
                              ornament: null,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  id: '',
                  name: 'Jaurès',
                  interestPoint: false,
                  preventSubtitleOverlapping: true,
                  connections: [
                    {
                      id: '',
                      $modeConnection: {
                        mode: 'METRO',
                        walk: false,
                        elements: [
                          {
                            id: '',
                            $modeConnectionElement: {
                              lineIndex: {
                                $builtinLineIndex: {
                                  mode: 'METRO',
                                  index: '2',
                                },
                              },
                              walk: false,
                              ornament: null,
                            },
                          },
                          {
                            id: '',
                            $modeConnectionElement: {
                              lineIndex: {
                                $builtinLineIndex: {
                                  mode: 'METRO',
                                  index: '5',
                                },
                              },
                              walk: false,
                              ornament: null,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  id: '',
                  name: 'Bolivar',
                  interestPoint: false,
                  preventSubtitleOverlapping: true,
                  connections: [],
                },
                {
                  id: '',
                  name: 'Buttes Chaumont',
                  interestPoint: false,
                  preventSubtitleOverlapping: true,
                  connections: [],
                },
                {
                  id: '',
                  name: 'Botzaris',
                  interestPoint: false,
                  preventSubtitleOverlapping: true,
                  connections: [],
                },
              ],
            },
          },
          {
            id: '5',
            $fork: {
              toward: 'RIGHT',
              linksOffset: [1.0, -1],
              originOffset: 0,
            },
          },
          {
            id: '6',
            $parallelBranches: {
              alignement: 'FLUID',
              sections: [
                {
                  id: '',
                  $lineSection: {
                    levelOffset: 1,
                    elements: [
                      {
                        id: '',
                        $branch: {
                          stopSpacing: 10,
                          stops: [
                            {
                              id: '',
                              name: 'Danube',
                              interestPoint: false,
                              preventSubtitleOverlapping: true,
                              connections: [],
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
                    levelOffset: -1,
                    elements: [
                      {
                        id: '',
                        $branch: {
                          stopSpacing: 0,
                          leftMargin: 7,
                          rightMargin: 7,
                          stops: [
                            {
                              id: '',
                              name: 'Place\ndes Fêtes',
                              interestPoint: false,
                              preventSubtitleOverlapping: true,
                              connections: [
                                {
                                  id: '',
                                  $modeConnection: {
                                    mode: 'METRO',
                                    walk: false,
                                    elements: [
                                      {
                                        id: '',
                                        $modeConnectionElement: {
                                          lineIndex: {
                                            $builtinLineIndex: {
                                              mode: 'METRO',
                                              index: '11',
                                            },
                                          },
                                          walk: false,
                                          ornament: null,
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
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
            id: '7',
            $loop: {
              toward: 'LEFT',
              linksOffsets: [1, -1],
            },
          },

           */
        ],
      },
    },
    // {
    //  id: '2',
    //  $lineSection: {
    //    elements: [],
    //  },
    // },
  ],
}
</script>

<template>
  <div class="flex-grow flex flex-col gap-5 h-full">
    <Topbar />

    <div class="editor">
      <div class="controls flex flex-col gap-4">
        <Panel header="Menu">
          <MainMenu />
        </Panel>
        <Panel header="Propriétés">
          <GeneralMapSettings />
        </Panel>
      </div>

      <div class="canvas flex flex-col gap-4">
        <Panel
          header="Éditeur de plan"
          pt:root:class="flex flex-col flex-grow"
          pt:content-container:class="flex-grow"
          pt:content:class="h-full"
        >
          <LineCanvas v-model="line" />
        </Panel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  max-width: 100%;
  flex-grow: 1;
  gap: 1rem;
}

@media (max-width: 640px) {
  .editor {
    grid-template-columns: auto;

    .controls {
      order: 1;
    }

    .canvas {
      order: -1;
    }
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .editor {
    grid-template-columns: auto;

    .controls {
      order: 1;
      flex-direction: row;

      > * {
        flex-grow: 1;
      }
    }

    .canvas {
      order: -1;
    }
  }
}
</style>
