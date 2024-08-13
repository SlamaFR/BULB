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
      id: '',
      $lineSection: {
        elements: [
          {
            id: '',
            $branch: {
              stopSpacing: 8,
              stops: [
                {
                  id: '',
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
            id: '',
            $fork: {
              toward: 'RIGHT',
              linksOffset: [1.0, -1],
              originOffset: 0,
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
            id: '',
            $loop: {
              toward: 'LEFT',
              linksOffsets: [1, -1],
            },
          },
        ],
      },
    },
  ],
}
</script>

<template>
  <div class="flex-grow flex flex-col gap-5 h-full">
    <Topbar />

    <div class="editor">
      <div class="flex flex-col gap-4">
        <Panel header="Menu">
          <MainMenu />
        </Panel>
        <Panel header="Propriétés">
          <GeneralMapSettings />
        </Panel>
      </div>

      <div class="flex flex-col gap-4">
        <!--
        <Panel header="Prévisualisation">
          <div class="border-1 border-[var(--blue-ratp-paper)] overflow-x-auto bg-white">
            <LineMap :line="line" />
          </div>
        </Panel>
        -->

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
  .bottom-container {
    grid-template-columns: auto;
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .bottom-container {
    grid-template-columns: auto auto;

    .wide {
      grid-column: span 2;
    }
  }
}
</style>
