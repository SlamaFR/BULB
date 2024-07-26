<script setup lang="ts">
const terminus = [false, true]
const name = ['Name g on 1 line ', 'Name on 2 lines\nno p low baseline']// , 'Nom sur 2 lines\navec texte plus bas']
const placeName = [null, 'Lieu remarquable ou touristique']

const combinations = terminus.flatMap(terminus => name.flatMap(name => placeName.map(placeName => ({ name, placeName, terminus }))))
const innerCombination = name.flatMap(name => placeName.map(placeName => ({ name, placeName, terminus: false })))
</script>

<template>
  <div v-for="combination1 in combinations" class="px-15 pt-30 flex flex-col gap-30">
    <div v-for="combination2 in innerCombination" class="flex flex-row gap-40">
      <Line v-for="combination3 in combinations" color="#82C8E6" stop-spacing="1">
        <Stop
          :name="combination1.name"
          :subtitle="combination1.placeName"
          subtitle-interest-point
          :terminus="combination1.terminus"
        />
        <Stop
          :name="combination2.name"
          :subtitle="combination2.placeName"
          subtitle-interest-point
        />
        <Stop
          :name="combination3.name"
          :subtitle="combination3.placeName"
          subtitle-interest-point
          :terminus="combination3.terminus"
        />
      </Line>
    </div>
  </div>
</template>
