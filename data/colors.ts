export const ROUGE_COQUELICOT: ColorChoice = { value: '#ed1c2a', label: 'Rouge Coquelicot' }
export const ORANGE: ColorChoice = { value: '#f78f4b', label: 'Orange' }
export const JAUNE_VIF: ColorChoice = { value: '#ffcd02', label: 'Jaune Vif' }
export const JAUNE_OCRE: ColorChoice = { value: '#e0b03b', label: 'Jaune Ocre' }
export const MARON: ColorChoice = { value: '#8d6539', label: 'Marron' }
export const OLIVE_CLAIR: ColorChoice = { value: '#cec92a', label: 'Olive Clair' }
export const OLIVE_FONCE: ColorChoice = { value: '#9b993b', label: 'Olive Foncé' }
export const VERT_FONCE: ColorChoice = { value: '#008c5a', label: 'Vert Foncé' }
export const VERT_CLAIR: ColorChoice = { value: '#77c696', label: 'Vert Clair' }
export const TURQUOISE: ColorChoice = { value: '#00b397', label: 'Turquoise' }
export const BLEU_CLAIR: ColorChoice = { value: '#87d3df', label: 'Bleu Clair' }
export const BLEU_OUTREMER: ColorChoice = { value: '#4c90cd', label: 'Bleu Outremer' }
export const BLEU_FONCE: ColorChoice = { value: '#006db8', label: 'Bleu Foncé' }
export const VIOLET: ColorChoice = { value: '#662c91', label: 'Violet' }
export const MAGENTA: ColorChoice = { value: '#bb4a9b', label: 'Magenta' }
export const LILAS: ColorChoice = { value: '#c5a3cd', label: 'Lilas' }
export const ROSE: ColorChoice = { value: '#f59fb3', label: 'Rose' }
export const ROUGE_FRAMBOISE: ColorChoice = { value: '#b80b4b', label: 'Rouge Framboise' }

export const COLORS: ColorChoice[] = [
  ROUGE_COQUELICOT,
  ORANGE,
  JAUNE_VIF,
  JAUNE_OCRE,
  MARON,
  OLIVE_CLAIR,
  OLIVE_FONCE,
  VERT_FONCE,
  VERT_CLAIR,
  TURQUOISE,
  BLEU_CLAIR,
  BLEU_OUTREMER,
  BLEU_FONCE,
  VIOLET,
  MAGENTA,
  LILAS,
  ROSE,
  ROUGE_FRAMBOISE,
]

export function findColorByValue(value: string | null, fallback: string): ColorChoice | null {
  if (value === null) return null
  return COLORS.find(color => color.value === value) ?? {
    value,
    label: fallback,
  }
}
