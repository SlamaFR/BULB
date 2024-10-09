export const SERVICES: ServiceChoice[] = [
  { value: 'AIRPORT', label: 'data.services.airport' },
  { value: 'MAIN_STATION', label: 'data.services.main_station' },
  { value: 'BULLET_TRAIN', label: 'data.services.bullet_train' },
  { value: 'SUBURBAN_TRAIN', label: 'data.services.suburban_train' },
  { value: 'TGV', label: 'data.services.tgv' },
  { value: 'TER', label: 'data.services.ter' },
  { value: 'LONG_DISTANCE_BUS', label: 'data.services.long_distance_bus' },
  { value: 'FUNICULAR', label: 'data.services.funicular' },
  { value: 'ROISSY_BUS', label: '\u200B' },
  { value: 'ORLY_BUS', label: '\u200B' },
  { value: 'CDGVAL', label: 'data.services.cdgval' },
  { value: 'ORLYVAL', label: 'data.services.orlyval' },
  { value: 'ORLYVAL_LARGE', label: '\u200B' },
]

export function findServiceByValue(value: Service | null): ServiceChoice | null {
  return SERVICES.find(service => service.value === value) ?? null
}
