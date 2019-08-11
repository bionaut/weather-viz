import { stopPropagation } from './utility-presets'

const common = {
  alignItems: 'stretch',
  height: ['100%', null, 'auto'],
}

export const normalModal = {
  width: ['100%', null, 400, 500],
  ...common,
  ...stopPropagation,
}

export const wideModal = {
  width: ['100%', null, 500, 800],
  ...common,
  ...stopPropagation,
}

export const modalControls = {
  position: ['fixed', null, 'relative'],
  width: '100%',
  bottom: 0,
  justifyContent: 'space-between',
  p: 'padding.1',
}
