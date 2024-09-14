<script setup lang="ts">
const terminus = [false, true]
const name = ['One line', 'Name on\ntwo lines']// , 'Nom sur 2 lines\navec texte plus bas']
const placeName = [null, 'Lieu remarquable ou touristique']

const combinations = terminus.flatMap(terminus => name.flatMap(name => placeName.map(placeName => ({
  name,
  placeName,
  terminus,
}))))
const innerCombination = name.flatMap(name => placeName.map(placeName => ({ name, placeName, terminus: false })))

provide<LineContext>(LineContextKey, {
  color: ref('red'),
  lineWidth: ref(0.375),
})
</script>

<template>
  <div v-for="combination1 in combinations" class="px-3em py-5em flex flex-col gap-7.5em bg-white text-2em">
    <div v-for="combination2 in innerCombination" class="flex flex-row gap-40">
      <div v-for="combination3 in combinations" class="flex flew-row">
        <Stop
          :model-value="{
            id: '',
            placeName: '',
            name: combination1.name,
            subtitle: combination1.placeName,
            interestPoint: true,
            preventSubtitleOverlapping: true,
            terminus: true,
            connections: [],
          }"
        />
        <Stop
          :model-value="{
            id: '',
            placeName: '',
            name: combination2.name,
            subtitle: combination2.placeName,
            interestPoint: true,
            preventSubtitleOverlapping: true,
            terminus: false,
            connections: [],
          }"
        />
        <Stop
          :model-value="{
            id: '',
            placeName: '',
            name: `${combination2.name} p`,
            subtitle: combination2.placeName,
            interestPoint: true,
            preventSubtitleOverlapping: true,
            terminus: false,
            connections: [],
          }"
        />
        <Stop
          :model-value="{
            id: '',
            placeName: '',
            name: combination3.name,
            subtitle: combination3.placeName,
            interestPoint: true,
            preventSubtitleOverlapping: true,
            terminus: true,
            connections: [],
          }"
        />
      </div>
    </div>
  </div>
</template>
