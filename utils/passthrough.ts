import type { PrimeVuePTOptions } from 'primevue/config'

const Passthrough: PrimeVuePTOptions = {
  dialog: {
    root: {
      class: 'important-m-4',
    },
    header: {
      class: 'gap-6',
    },
    transition: {
      enterActiveClass: 'b-dialog-enter-active',
    },
  },
}

export default Passthrough
