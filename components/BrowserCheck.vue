<script setup lang="ts">
import { browserName, isFirefox, isSafari } from '@basitcodeenv/vue3-device-detect'

const visible = ref(isFirefox || isSafari)
</script>

<template>
  <Dialog
    v-model:visible="visible"
    header="Navigateur non supporté"
    modal
    :draggable="false"
    :closable="false"
    pt:root:class="w-50em"
  >
    <div class="flex flex-col gap-4">
      <p>
        Il semblerait que vous utilisiez <b>{{ browserName() }}</b> comme navigateur.
        Ce dernier n'est pas officiellement supporté par BULB. Si vous poursuivez, certains comportements inattendus
        pourraient survenir, et vous pourriez rencontrer des problèmes graphiques.
      </p>
      <p>
        Pour une expérience optimale, il est recommandé d'utiliser un navigateur basé sur Chromium tel que Google Chrome,
        Microsoft Edge, Opera, Brave, etc.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-5em justify-center my-6">
        <div class="flex flex-col gap-4 items-center">
          <div class="grid grid-cols-2 sm:flex sm:flex-row gap-2 grayscale-100">
            <img class="h-5em" src="~/assets/svg/browsers/firefox.svg">
            <img class="h-5em" src="~/assets/svg/browsers/safari.svg">
          </div>
          <Tag severity="danger">
            Navigateurs non-supportés
          </Tag>
        </div>

        <div class="flex flex-col gap-4 items-center">
          <div class="grid grid-cols-2 sm:flex sm:flex-row gap-2 ">
            <img class="h-5em" src="~/assets/svg/browsers/chrome.svg">
            <img class="h-5em" src="~/assets/svg/browsers/edge.svg">
            <img class="h-5em" src="~/assets/svg/browsers/opera.svg">
            <img class="h-5em" src="~/assets/svg/browsers/brave.svg">
          </div>
          <Tag severity="success">
            Navigateurs supportés
          </Tag>
        </div>
      </div>
    </div>

    <template #footer>
      <Button @click="visible = false">
        J’ai compris
      </Button>
    </template>
  </Dialog>
</template>
