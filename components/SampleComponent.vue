<script lang="ts" setup>
const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment, reset } = store
</script>

<template>
  <div class="flex-center flex-col gap-10">
    <h1 class="title">
      Counter: {{ count }}
    </h1>
    <div class="flex-center flex-row gap-5">
      <button class="btn" @click="increment">
        Increment
      </button>
      <button class="btn" @click="reset">
        Reset
      </button>
    </div>
  </div>
</template>
