<script setup lang="ts">
const line: Line = {
  mode: 'METRO',
  index: {
    $builtinLineIndex: {
      mode: 'METRO',
      index: '7bis',
    },
  },
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
  <div class="flex flex-col gap-15 bg-white text-black p-10">
    <div class="flex flex-row items-center">
      <div class="h-1.5em w-10em bg-red">
        Branch
      </div>
      <div class="h-4em w-5em bg-blue">
        Fork
      </div>
      <div class="relative flex flex-col gap-4 outline-amber outline-2 outline-solid outline-offset-.5em">
        <span class="absolute top--2em left-0 text-amber text-nowrap">ParallelBranches [fluid]</span>
        <div class="h-1.5em w-10em bg-red">
          Branch
        </div>
        <div class="h-1.5em w-10em bg-red">
          Branch
        </div>
      </div>
      <div class="h-4em w-3em bg-green border-rd-tr-2em border-rd-br-2em">
        Loop
      </div>
    </div>

    <div class="flex flex-row items-center">
      <div class="relative flex flex-col gap-4 items-end outline-amber outline-2 outline-solid outline-offset-.5em">
        <span class="absolute top--2em left-0 text-amber text-nowrap">ParallelBranches [right]</span>
        <div class="flex flex-row">
          <div class="relative flex flex-col gap-4 items-end outline-orange outline-2 outline-solid outline-offset-.25em">
            <span class="absolute bottom--1.75em left-0 text-orange text-nowrap text-sm">ParallelBranches [right]</span>
            <div class="h-1.5em w-10em bg-red">
              Branch
            </div>
            <div class="h-1.5em w-5em bg-red">
              Branch
            </div>
          </div>
          <div class="h-4em w-5em bg-blue flex-shrink-0">
            Fork
          </div>
          <div class="h-1.5em w-7em bg-red">
            Branch
          </div>
        </div>
        <div class="h-1.5em w-13em bg-red">
          Branch
        </div>
      </div>
      <div class="h-6.5em w-5em bg-blue flex-shrink-0">
        Fork
      </div>
      <div class="h-1.5em w-13em bg-red">
        Branch
      </div>
      <div class="h-6.5em w-5em bg-blue flex-shrink-0">
        Fork
      </div>
      <div class="relative flex flex-col gap-14 items-start outline-amber outline-2 outline-solid outline-offset-.5em">
        <span class="absolute top--2em left-0 text-amber text-nowrap">ParallelBranches [left]</span>
        <div class="h-1.5em w-13em bg-red">
          Branch
        </div>
        <div class="h-1.5em w-10em bg-red">
          Branch
        </div>
      </div>
    </div>

    <Line :line="line" />
  </div>
</template>

<style>
</style>
