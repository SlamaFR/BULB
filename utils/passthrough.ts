import type { PrimeVuePTOptions } from 'primevue/config'

const Passthrough: PrimeVuePTOptions = {
  dialog: {
    root: {
      style: {
        margin: '1em !important',
      },
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
