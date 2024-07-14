function isISODate(value: string) {
  return /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/.test(value)
}

export const jsonDateSerializer = {
  serialize: JSON.stringify,
  deserialize(value: string) {
    return JSON.parse(value, (_, value) => typeof value === 'string' && isISODate(value)
      ? new Date(value)
      : value)
  },
}
