type ElementType = 'STOP' | null

interface ElementGrabbingEvent {
  type: ElementType
}

export default function useElementGrabbing(onGrab: (event: ElementGrabbingEvent) => void = () => {}) {
  const eventBus = useEventBus<ElementGrabbingEvent>(ElementGrabbingSignal)

  onMounted(() => {
    eventBus.on(onGrab)
  })
  onUnmounted(() => {
    eventBus.off(onGrab)
  })

  const grab = (type: ElementType) => {
    eventBus.emit({ type })
  }

  const release = () => {
    eventBus.emit({ type: null })
  }

  return { grab, release }
}