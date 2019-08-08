import { SyntheticEvent } from 'react'

export const noPointerEvents = {
  pointerEvents: 'none',
}

export const withPointerEvents = {
  onMouseDown: (e: SyntheticEvent) => e.stopPropagation(),
  pointerEvents: 'auto',
}

export const stopPropagation = {
  onClick: (e: SyntheticEvent) => e.stopPropagation(),
}
