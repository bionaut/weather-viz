import * as React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
} from 'styled-system'

import { Box, BoxProps, ResponsiveProp } from './box'

export type FlexProps = BoxProps & {
  flexWrap?: ResponsiveProp
  flexDirection?: ResponsiveProp
  flex?: ResponsiveProp
  flexBasis?: ResponsiveProp
  alignSelf?: ResponsiveProp
  justifySelf?: ResponsiveProp
  alignItems?: ResponsiveProp
  justifyContent?: ResponsiveProp
  justifyItems?: ResponsiveProp
}

export const Flex: React.FC<FlexProps> = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${flex}
  ${flexBasis}
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${justifySelf}
  ${justifyItems}
`
