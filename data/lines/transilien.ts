import {
  LILAS,
  MARON,
  OLIVE_CLAIR,
  OLIVE_FONCE,
  ORANGE,
  ROSE,
  ROUGE_FRAMBOISE,
  TURQUOISE,
} from '~/data/colors'

export const TRANSILIEN_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'H' } }, label: 'Transilien H', color: MARON.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'J' } }, label: 'Transilien J', color: OLIVE_CLAIR.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'K' } }, label: 'Transilien K', color: OLIVE_FONCE.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'L' } }, label: 'Transilien L', color: LILAS.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'N' } }, label: 'Transilien N', color: TURQUOISE.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'P' } }, label: 'Transilien P', color: ORANGE.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'R' } }, label: 'Transilien R', color: ROSE.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'U' } }, label: 'Transilien U', color: ROUGE_FRAMBOISE.value },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'V' } }, label: 'Transilien V', color: OLIVE_FONCE.value },
]
