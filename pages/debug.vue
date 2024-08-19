<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-3 bg-white text-black pt-30 p-10">
    <Stop
      name="Lorem ipsum"
    />
  </div>
  <div class="flex flex-col gap-3 bg-white p-10">
    <div class="flex gap-3 text-3em">
      <Mode mode="METRO" />
      <Mode mode="RER" />
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
      <Metro line="3bis" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="1" color="#ffcd02" shape="CIRCLE" />
      <CustomLineIndex index="A" color="#ed1c2a" text-color="white" shape="SQUARE" />
      <CustomLineIndex prefix="T" index="1" color="#006db8" shape="LINES" />
      <CustomLineIndex prefix="T" index="3" suffix="a" color="#f78f4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="3" suffix="b" color="#008c5a" shape="LINES" />
      <CustomLineIndex prefix="T" index="13" color="#8d6539" shape="LINES" />
      <CustomLineIndex prefix="T" index="14" color="#00b397" shape="LINES" />
      <CustomLineIndex index="3" suffix="bis" color="#87d3df" shape="CIRCLE" />
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

    <div class="flex gap-3 text-3em">
      <Metro line="1" />
      <Metro line="2" />
      <Metro line="3" />
      <Metro line="3bis" />
      <Metro line="4" />
      <Metro line="5" />
      <Metro line="6" />
      <Metro line="7" />
      <Metro line="7bis" />
      <Metro line="8" />
      <Metro line="9" />
      <Metro line="10" />
      <Metro line="11" />
      <Metro line="12" />
      <Metro line="13" />
      <Metro line="14" />
      <Metro line="15" />
      <Metro line="16" />
      <Metro line="17" />
      <Metro line="18" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="1" color="#ffcd02" shape="CIRCLE" />
      <CustomLineIndex index="2" color="#006db8" shape="CIRCLE" />
      <CustomLineIndex index="3" color="#9b993b" shape="CIRCLE" />
      <CustomLineIndex index="3" suffix="bis" color="#87d3df" shape="CIRCLE" />
      <CustomLineIndex index="4" color="#bb4a9b" shape="CIRCLE" />
      <CustomLineIndex index="5" color="#f78f4b" shape="CIRCLE" />
      <CustomLineIndex index="6" color="#77c696" shape="CIRCLE" />
      <CustomLineIndex index="7" color="#f59fb3" shape="CIRCLE" />
      <CustomLineIndex index="7" suffix="bis" color="#77c696" shape="CIRCLE" />
      <CustomLineIndex index="8" color="#c5a3cd" shape="CIRCLE" />
      <CustomLineIndex index="9" color="#cec92a" shape="CIRCLE" />
      <CustomLineIndex index="10" color="#e0b03b" shape="CIRCLE" />
      <CustomLineIndex index="11" color="#8d6539" shape="CIRCLE" />
      <CustomLineIndex index="12" color="#008c5a" shape="CIRCLE" />
      <CustomLineIndex index="13" color="#87d3df" shape="CIRCLE" />
      <CustomLineIndex index="14" color="#662c91" shape="CIRCLE" />
      <CustomLineIndex index="15" color="#b80b4b" shape="CIRCLE" />
      <CustomLineIndex index="16" color="#f59fb3" shape="CIRCLE" />
      <CustomLineIndex index="17" color="#cec92a" shape="CIRCLE" />
      <CustomLineIndex index="18" color="#00b397" shape="CIRCLE" />
    </div>

    <div class="flex gap-3 text-3em">
      <ExpressTrain line="A" />
      <ExpressTrain line="B" />
      <ExpressTrain line="C" />
      <ExpressTrain line="D" />
      <ExpressTrain line="E" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="A" color="#ed1c2a" shape="SQUARE" />
      <CustomLineIndex index="B" color="#4c90cd" shape="SQUARE" />
      <CustomLineIndex index="C" color="#ffcd02" shape="SQUARE" />
      <CustomLineIndex index="D" color="#008c5a" shape="SQUARE" />
      <CustomLineIndex index="E" color="#bb4a9b" shape="SQUARE" />
    </div>

    <div class="flex gap-3 text-3em">
      <Train line="H" />
      <Train line="J" />
      <Train line="K" />
      <Train line="L" />
      <Train line="N" />
      <Train line="P" />
      <Train line="R" />
      <Train line="U" />
      <Train line="V" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="H" color="#8d6539" shape="SQUARE" />
      <CustomLineIndex index="J" color="#cec92a" shape="SQUARE" />
      <CustomLineIndex index="K" color="#9b993b" shape="SQUARE" />
      <CustomLineIndex index="L" color="#c5a3cd" shape="SQUARE" />
      <CustomLineIndex index="N" color="#00b397" shape="SQUARE" />
      <CustomLineIndex index="P" color="#f78f4b" shape="SQUARE" />
      <CustomLineIndex index="R" color="#f59fb3" shape="SQUARE" />
      <CustomLineIndex index="U" color="#b80b4b" shape="SQUARE" />
      <CustomLineIndex index="V" color="#9b993b" shape="SQUARE" />
    </div>

    <div class="flex gap-3 text-3em">
      <Tram line="1" />
      <Tram line="2" />
      <Tram line="3a" />
      <Tram line="3b" />
      <Tram line="4" />
      <Tram line="5" />
      <Tram line="6" />
      <Tram line="7" />
      <Tram line="8" />
      <Tram line="9" />
      <Tram line="10" />
      <Tram line="11" />
      <Tram line="12" />
      <Tram line="13" />
      <Tram line="14" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex prefix="T" index="1" color="#006db8" shape="LINES" />
      <CustomLineIndex prefix="T" index="2" color="#bb4a9b" shape="LINES" />
      <CustomLineIndex prefix="T" index="3" suffix="a" color="#f78f4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="3" suffix="b" color="#008c5a" shape="LINES" />
      <CustomLineIndex prefix="T" index="4" color="#e0b03b" shape="LINES" />
      <CustomLineIndex prefix="T" index="5" color="#662c91" shape="LINES" />
      <CustomLineIndex prefix="T" index="6" color="#ed1c2a" shape="LINES" />
      <CustomLineIndex prefix="T" index="7" color="#8d6539" shape="LINES" />
      <CustomLineIndex prefix="T" index="8" color="#9b993b" shape="LINES" />
      <CustomLineIndex prefix="T" index="9" color="#4c90cd" shape="LINES" />
      <CustomLineIndex prefix="T" index="10" color="#9b993b" shape="LINES" />
      <CustomLineIndex prefix="T" index="11" color="#f78f4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="12" color="#b80b4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="13" color="#8d6539" shape="LINES" />
      <CustomLineIndex prefix="T" index="14" color="#00b397" shape="LINES" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="1" color="#006db8" shape="SQUARE" />
      <CustomLineIndex index="2" color="#bb4a9b" shape="SQUARE" />
      <CustomLineIndex index="3" color="#f78f4b" shape="SQUARE" />
      <CustomLineIndex index="3" color="#008c5a" shape="SQUARE" />
      <CustomLineIndex index="4" color="#e0b03b" shape="SQUARE" />
      <CustomLineIndex index="5" color="#662c91" shape="SQUARE" />
      <CustomLineIndex index="6" color="#ed1c2a" shape="SQUARE" />
      <CustomLineIndex index="7" color="#8d6539" shape="SQUARE" />
      <CustomLineIndex index="8" color="#9b993b" shape="SQUARE" />
      <CustomLineIndex index="9" color="#4c90cd" shape="SQUARE" />
      <CustomLineIndex index="10" color="#9b993b" shape="SQUARE" />
      <CustomLineIndex index="11" color="#f78f4b" shape="SQUARE" />
      <CustomLineIndex index="12" color="#b80b4b" shape="SQUARE" />
      <CustomLineIndex index="13" color="#8d6539" shape="SQUARE" />
      <CustomLineIndex index="14" color="#00b397" shape="SQUARE" />
      <CustomLineIndex index="01" color="#9b993b" shape="SQUARE" />
      <CustomLineIndex index="11" color="#f78f4b" shape="SQUARE" />
      <CustomLineIndex index="21" color="#b80b4b" shape="SQUARE" />
      <CustomLineIndex index="31" color="#8d6539" shape="SQUARE" />
      <CustomLineIndex index="41" color="#00b397" shape="SQUARE" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="1" color="#006db8" shape="CIRCLE" />
      <CustomLineIndex index="2" color="#bb4a9b" shape="CIRCLE" />
      <CustomLineIndex index="3" color="#f78f4b" shape="CIRCLE" />
      <CustomLineIndex index="3" color="#008c5a" shape="CIRCLE" />
      <CustomLineIndex index="4" color="#e0b03b" shape="CIRCLE" />
      <CustomLineIndex index="5" color="#662c91" shape="CIRCLE" />
      <CustomLineIndex index="6" color="#ed1c2a" shape="CIRCLE" />
      <CustomLineIndex index="7" color="#8d6539" shape="CIRCLE" />
      <CustomLineIndex index="8" color="#9b993b" shape="CIRCLE" />
      <CustomLineIndex index="9" color="#4c90cd" shape="CIRCLE" />
      <CustomLineIndex index="10" color="#9b993b" shape="CIRCLE" />
      <CustomLineIndex index="11" color="#f78f4b" shape="CIRCLE" />
      <CustomLineIndex index="12" color="#b80b4b" shape="CIRCLE" />
      <CustomLineIndex index="13" color="#8d6539" shape="CIRCLE" />
      <CustomLineIndex index="14" color="#00b397" shape="CIRCLE" />
      <CustomLineIndex index="01" color="#9b993b" shape="CIRCLE" />
      <CustomLineIndex index="11" color="#f78f4b" shape="CIRCLE" />
      <CustomLineIndex index="21" color="#b80b4b" shape="CIRCLE" />
      <CustomLineIndex index="31" color="#8d6539" shape="CIRCLE" />
      <CustomLineIndex index="41" color="#00b397" shape="CIRCLE" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex index="1" color="#006db8" shape="LINES" />
      <CustomLineIndex index="2" color="#bb4a9b" shape="LINES" />
      <CustomLineIndex index="3" color="#f78f4b" shape="LINES" />
      <CustomLineIndex index="3" color="#008c5a" shape="LINES" />
      <CustomLineIndex index="4" color="#e0b03b" shape="LINES" />
      <CustomLineIndex index="5" color="#662c91" shape="LINES" />
      <CustomLineIndex index="6" color="#ed1c2a" shape="LINES" />
      <CustomLineIndex index="7" color="#8d6539" shape="LINES" />
      <CustomLineIndex index="8" color="#9b993b" shape="LINES" />
      <CustomLineIndex index="9" color="#4c90cd" shape="LINES" />
      <CustomLineIndex index="10" color="#9b993b" shape="LINES" />
      <CustomLineIndex index="11" color="#f78f4b" shape="LINES" />
      <CustomLineIndex index="12" color="#b80b4b" shape="LINES" />
      <CustomLineIndex index="13" color="#8d6539" shape="LINES" />
      <CustomLineIndex index="14" color="#00b397" shape="LINES" />
      <CustomLineIndex index="01" color="#9b993b" shape="LINES" />
      <CustomLineIndex index="11" color="#f78f4b" shape="LINES" />
      <CustomLineIndex index="21" color="#b80b4b" shape="LINES" />
      <CustomLineIndex index="31" color="#8d6539" shape="LINES" />
      <CustomLineIndex index="41" color="#00b397" shape="LINES" />
    </div>
    <div class="flex gap-3 text-3em">
      <CustomLineIndex prefix="T" index="1" color="#006db8" shape="LINES" />
      <CustomLineIndex prefix="T" index="2" color="#bb4a9b" shape="LINES" />
      <CustomLineIndex prefix="T" index="3" color="#f78f4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="3" color="#008c5a" shape="LINES" />
      <CustomLineIndex prefix="T" index="4" color="#e0b03b" shape="LINES" />
      <CustomLineIndex prefix="T" index="5" color="#662c91" shape="LINES" />
      <CustomLineIndex prefix="T" index="6" color="#ed1c2a" shape="LINES" />
      <CustomLineIndex prefix="T" index="7" color="#8d6539" shape="LINES" />
      <CustomLineIndex prefix="T" index="8" color="#9b993b" shape="LINES" />
      <CustomLineIndex prefix="T" index="9" color="#4c90cd" shape="LINES" />
      <CustomLineIndex prefix="T" index="10" color="#9b993b" shape="LINES" />
      <CustomLineIndex prefix="T" index="11" color="#f78f4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="12" color="#b80b4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="13" color="#8d6539" shape="LINES" />
      <CustomLineIndex prefix="T" index="14" color="#00b397" shape="LINES" />
      <CustomLineIndex prefix="T" index="01" color="#9b993b" shape="LINES" />
      <CustomLineIndex prefix="T" index="11" color="#f78f4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="21" color="#b80b4b" shape="LINES" />
      <CustomLineIndex prefix="T" index="31" color="#8d6539" shape="LINES" />
      <CustomLineIndex prefix="T" index="41" color="#00b397" shape="LINES" />
    </div>
    <div class="flex gap-3">
      <div class="text-3em">
        <CustomLineIndex index="3" suffix="bis" color="#006db8" shape="CIRCLE" />
      </div>
      <div class="text-2em">
        <CustomLineIndex index="3" suffix="bis" color="#006db8" shape="CIRCLE" />
      </div>
      <div class="text-1em">
        <CustomLineIndex index="3" suffix="bis" color="#006db8" shape="CIRCLE" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
