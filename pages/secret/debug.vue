<script setup lang="ts">
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
  <div class="flex flex-col gap-3">
    <div class="flex gap-3 text-3em">
      <Mode mode="METRO" />
      <Mode mode="RER" />
      <Mode mode="TER" />
      <Mode mode="TRAIN" />
      <Mode mode="TRAIN_RER" />
      <Mode mode="BOAT" />
      <Mode mode="BUS" />
      <Mode mode="CABLE" />
      <Mode mode="TRAM" />
      <Mode mode="VELO" />
    </div>
    <div class="flex gap-3 text-3em">
      <Mode plain mode="METRO" />
      <Mode plain mode="RER" />
      <Mode plain mode="TER" />
      <Mode plain mode="TRAIN" />
      <Mode plain mode="TRAIN_RER" />
      <Mode plain mode="BOAT" />
      <Mode plain mode="BUS" />
      <Mode plain mode="CABLE" />
      <Mode plain mode="TRAM" />
      <Mode plain mode="VELO" />
    </div>
  </div>
</template>

<style>
</style>
