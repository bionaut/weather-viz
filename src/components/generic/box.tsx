import * as React from 'react'
import { DragEventHandler, MouseEventHandler } from 'react'
import styled from 'styled-components'
import {
  backgroundRepeat,
  backgroundSize,
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRight,
  borderTop,
  bottom,
  boxShadow,
  color,
  display,
  gridArea,
  gridColumn,
  gridRow,
  left,
  opacity,
  position,
  right,
  space,
  style,
  styleFn,
  top,
  zIndex,
} from 'styled-system'

export const overflow = style({
  cssProperty: 'overflow',
  prop: 'overflow',
})

export const overflowX = style({
  cssProperty: 'overflowX',
  prop: 'overflowX',
})

export const overflowY = style({
  cssProperty: 'overflowY',
  prop: 'overflowY',
})

export const background = style({
  cssProperty: 'background',
  key: 'colors',
  prop: 'background',
})

export const cursor = style({
  cssProperty: 'cursor',
  prop: 'cursor',
})

export const spaceProp = (name: string) =>
  style({
    cssProperty: name,
    key: 'space',
    prop: name,
  })

export type ResponsiveKeys =
  | 'display'
  | 'position'
  | 'm'
  | 'mx'
  | 'my'
  | 'ml'
  | 'mr'
  | 'mt'
  | 'mb'
  | 'p'
  | 'px'
  | 'py'
  | 'pl'
  | 'pr'
  | 'pt'
  | 'pb'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'left'
  | 'bottom'
  | 'right'
  | 'top'
  | 'height'
  | 'width'
  | 'minHeight'
  | 'maxHeight'
  | 'minWidth'
  | 'maxWidth'
  | 'color'
  | 'opacity'
  | 'cursor'
  | 'background'
  | 'backgroundSize'
  | 'backgroundRepeat'
  | 'boxShadow'
  | 'border'
  | 'borderRadius'
  | 'borderBottom'
  | 'borderTop'
  | 'borderLeft'
  | 'borderRight'
  | 'borderColor'
  | 'zIndex'
  | 'gridColumn'
  | 'gridRow'
  | 'gridArea'
  | 'tabIndex'

export type ResponsiveProp =
  | string
  | number
  | Array<number | null | string>
  | styleFn
export type ResponsiveProps = { [k in ResponsiveKeys]?: ResponsiveProp }

export type BoxProps = ResponsiveProps & {
  ref?: React.Ref<any>
  draggable?: boolean
  altTitle?: string
  className?: string
  tabIndex?: number
  onClick?: MouseEventHandler | any
  onMouseDown?: MouseEventHandler
  onMouseUp?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  onDragOver?: DragEventHandler
  onDrag?: DragEventHandler
  onDragEnter?: DragEventHandler
  onDragLeave?: DragEventHandler
  onDragStart?: DragEventHandler
  onDragEnd?: DragEventHandler
  onDrop?: DragEventHandler
  pointerEvents?: string
  style?: any
}

export const Box: React.FC<BoxProps> = styled.div`
  box-sizing: border-box;
  position: relative;
  ${({ pointerEvents }: any) =>
    pointerEvents ? `pointer-events: ${pointerEvents}` : ''}
  ${position}
  ${display}
  ${space}
  ${top}
  ${left}
  ${bottom}
  ${right}  
  ${color}
  ${border}
  ${opacity}
  ${cursor}
  ${overflow}
  ${overflowX}
  ${overflowY}
  ${background}
  ${backgroundSize}
  ${backgroundRepeat}
  ${boxShadow}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderColor}
  ${zIndex}
  ${spaceProp('borderRadius')}
  ${spaceProp('minHeight')}
  ${spaceProp('minWidth')}
  ${spaceProp('maxWidth')}
  ${spaceProp('maxHeight')}
  ${spaceProp('width')}
  ${spaceProp('height')}
  ${gridColumn}
  ${gridRow}
  ${gridArea}
`
