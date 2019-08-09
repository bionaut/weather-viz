import { stopPropagation } from './utility-presets'

const common = {
  alignItems: 'stretch',
  height: ['100%', null, null, null, 'auto'],
}

export const normalModal = {
  width: ['100%', null, null, null, '500px'],
  ...common,
  ...stopPropagation,
}

export const wideModal = {
  width: ['100%', null, null, null, '800px'],
  ...common,
  ...stopPropagation,
}

export const modalControls = {
  position: ['fixed', null, null, null, 'relative'],
  width: '100%',
  bottom: 0,
  background: 'border',
  borderTop: '1px solid',
  borderColor: 'border',
  justifyContent: 'space-between',
  p: 'padding.1',
}
