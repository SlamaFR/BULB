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
  <div class="flex flex-col gap-3 bg-white p-10">
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

    <div class="flex gap-3 text-3em">
      <Metro line="1" />
      <ExpressTrain line="A" />
      <Tram line="1" />
      <Tram line="3a" />
      <Tram line="3b" />
      <Tram line="13" />
      <Tram line="14" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="1" color="#ffcd02" shape="CIRCLE" />
      <CustomLineIndex index="A" color="#ed1c2a" text-color="white" shape="SQUARE" />
      <CustomLineIndex index="1" color="#006db8" shape="LINES" />
      <CustomLineIndex index="3" suffix="a" color="#f78f4b" shape="LINES" />
      <CustomLineIndex index="3" suffix="b" color="#008c5a" shape="LINES" />
      <CustomLineIndex index="13" color="#8d6539" shape="LINES" />
      <CustomLineIndex index="14" color="#00b397" shape="LINES" />
    </div>
    <div class="flex gap-3 text-3em">
      <Metro line="18" />
      <ExpressTrain line="A" />
      <Tram line="1" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="19" color="#ed1c2a" text-color="white" shape="CIRCLE" />
      <CustomLineIndex index="F" color="#f78f4b" text-color="white" shape="SQUARE" />
      <CustomLineIndex index="16" color="#ffcd02" shape="LINES" />
      <CustomLineIndex index="2" color="#bb4a9b" shape="LINES" prefix="C" />
    </div>
    <div class="flex gap-3 text-3em">
      <Mode plain mode="VELO" />
      <CustomLineIndex index="1" color="#ed1c2a" shape="LINES" prefix="V" />
      <CustomLineIndex index="2" color="#ffcd02" shape="LINES" prefix="V" />
      <CustomLineIndex index="3" color="#008c5a" shape="LINES" prefix="V" />
      <CustomLineIndex index="4" color="#006db8" shape="LINES" prefix="V" />
      <CustomLineIndex index="5" color="#bb4a9b" shape="LINES" prefix="V" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="6" color="#cec92a" shape="LINES" prefix="V" />
      <CustomLineIndex index="7" color="#87d3df" shape="LINES" prefix="V" />
      <CustomLineIndex index="8" color="#662c91" shape="LINES" prefix="V" />
      <CustomLineIndex index="9" color="#f78f4b" shape="LINES" prefix="V" />
      <CustomLineIndex index="10" color="#f59fb3" shape="LINES" prefix="V" />
      <CustomLineIndex index="20" color="#8d6539" shape="LINES" prefix="V" />
    </div>
  </div>
</template>

<style>
</style>
