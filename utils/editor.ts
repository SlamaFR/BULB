export function deleteStop(stops: Stop[], index: number) {
  stops.splice(index, 1)
}

export function addStop(stops: Stop[], index: number) {
  stops.splice(index, 0, {
    name: 'Nouvel arrêt',
    subtitle: '',
    interestPoint: false,
    preventSubtitleOverlapping: true,
    connections: [],
  })
}
