import * as React from 'react'
import styled from 'styled-components'
import { Text, TextProps } from './text'

export const Link: React.FC<TextProps> = styled(Text)`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary[0]};
  color: ${({ theme }) => theme.colors.primary[0]};
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.colors.primary[0]};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.primary[0]};
  }
`
