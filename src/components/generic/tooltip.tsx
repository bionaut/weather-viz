import * as React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from '../generic'

type TooltipProps = {
  title: string
  color?: string
}

const Tip = styled(Flex)(
  ({ theme, color }) => `
  position: absolute;
  display: none;
  background: white;
  padding: 5px;
  border-radius: 10px;
  display: none;
  min-width: ${theme.space.tagSize * 2}px;
  border: 2px solid;
  border-color: ${color || theme.colors.gray[2]};
  bottom: -${theme.space.tagSize + 15}px;
  ::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${color || theme.colors.gray[2]};
    top: -5px;
    left: ${theme.space.tagSize / 2 - 5}px;
    transform: rotateZ(45deg);
    border-radius: 1px;
  }
  ::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 10px;
    background: white;
    top: 0;
    left: 5px;
    border-radius: 10px;
  }
`
)

const HoverBox = styled(Box)`
  :hover {
    ${Tip} {
      display: flex;
    }
  }
`

export const Tooltip: React.FC<TooltipProps> = ({ children, title, color }) => {
  return (
    <HoverBox>
      {children}
      <Tip zIndex={100} color={color}>
        <Text
          width={'100%'}
          zIndex={1}
          textAlign={'center'}
          whiteSpace={'nowrap'}
          color={'gray.1'}
          fontSize={0}
        >
          {title}
        </Text>
      </Tip>
    </HoverBox>
  )
}
