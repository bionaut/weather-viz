import * as React from 'react'
import styled from 'styled-components'
import { ResponsiveProp } from './box'
import { Flex, FlexProps } from './flex'

import {
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
} from 'styled-system'

export type GridProps = FlexProps & {
  gridAutoRows?: ResponsiveProp
  gridAutoColumns?: ResponsiveProp
  gridTemplateAreas?: ResponsiveProp
  gridTemplateRows?: ResponsiveProp
  gridTemplateColumns?: ResponsiveProp
  gridAutoFlow?: ResponsiveProp
  gridGap?: ResponsiveProp
}

export const Grid: React.FC<GridProps> = styled(Flex)`
  display: grid;
  ${gridAutoRows}
  ${gridAutoColumns}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridAutoFlow}
  ${gridGap}
`
