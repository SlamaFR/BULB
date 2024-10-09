export const AIRPORTS: AirportChoice[] = [
  { value: 'GENERIC', label: 'data.airports.generic' },
  { value: 'CDG', label: 'data.airports.cdg' },
  { value: 'ORY', label: 'data.airports.ory' },
  { value: 'BOTH', label: 'data.airports.both' },
]

export function findAirportVyValue(value: Airport | null): AirportChoice | null {
  return AIRPORTS.find(airport => airport.value === value) ?? null
}
