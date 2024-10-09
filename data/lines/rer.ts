import { BLEU_OUTREMER, JAUNE_VIF, MAGENTA, ROUGE_COQUELICOT, VERT_FONCE } from '~/data/colors'

export const RER_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'RER', $builtinLineIndex: { index: 'A' } }, label: 'RER A', color: ROUGE_COQUELICOT.value },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'B' } }, label: 'RER B', color: BLEU_OUTREMER.value },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'C' } }, label: 'RER C', color: JAUNE_VIF.value },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'D' } }, label: 'RER D', color: VERT_FONCE.value },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'E' } }, label: 'RER E', color: MAGENTA.value },
]
