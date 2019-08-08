import * as React from 'react'
import styled from 'styled-components'
import { Flex, FlexProps } from './flex'

export const Screen: React.FC<FlexProps> = styled(Flex)`
  position: ${({ position }) => position || 'absolute'};
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ width }) => width || '100%'};
`
