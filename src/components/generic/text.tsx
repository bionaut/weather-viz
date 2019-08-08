import * as React from 'react'
import styled from 'styled-components'
import {
  display,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  style,
  textAlign,
} from 'styled-system'

import { Box, BoxProps, ResponsiveProp } from './box'

export type TextProps = BoxProps & {
  fontFamily?: ResponsiveProp
  fontSize?: ResponsiveProp
  fontWeight?: ResponsiveProp
  textAlign?: ResponsiveProp
  lineHeight?: ResponsiveProp
  whiteSpace?: ResponsiveProp
  fontStyle?: 'italic' | 'normal' | 'oblique' | 'unset'
  light?: boolean
  bold?: boolean
  required?: boolean
  title?: string
}

export const whiteSpace = style({
  cssProperty: 'white-space',
  prop: 'whiteSpace',
})

export const Text: React.FC<TextProps> = styled(Box).attrs(({ color }) => ({
  color: color || 'inherit',
}))`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.family};
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${fontStyle} 
  ${lineHeight}
  ${whiteSpace}
  ${display}
  ${({ light }: TextProps) => (light ? 'font-weight: 300;' : '')}
  ${({ bold }: TextProps) => (bold ? 'font-weight: bold;' : '')}
  ${({ required }: TextProps) =>
    required ? '::after{content: "*"; color: red; margin-left: 3px;}' : ''}
`
