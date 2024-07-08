<template>
  <div class="h-screen">
    <NHeader />
    <div class="h-full flex-center flex-col gap-5">
      <div class="bg-white dark:bg-dark rounded-xl border-bluegray shadow-md border-1 border-opacity-25% p-10 w-100 sm:w-125 lg:w-170">
        <slot />
      </div>
    </div>
  </div>
  <div class="absolute bottom-10 right-10">
    <NuxtLinkLocale to="/" class="icon-btn text-4xl">
      <div i="tabler-arrow-left" />
    </NuxtLinkLocale>
  </div>
</template>
