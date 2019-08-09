import * as React from 'react'
import { isMobile } from 'react-device-detect'
import styled, { keyframes } from 'styled-components'

import { Box } from '../box'
import { Flex, FlexProps } from '../flex'
import { clear, noBorder, primary, VariationsProps } from './variations'

const jumpingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
  transform: translateY(-5px);
  }  
  100% {
  transform: translateY(0);
  }  
`

const JumpingBox: any = styled(Box)`
  animation-name: ${jumpingAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-delay: ${({ delay }: any) => delay || 0}ms;
  background: rgba(255, 255, 255, 1);
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 1px;
  margin-right: 1px;
  box-shadow: 0 0 1px 1px silver;
`

export const Loader = () => (
  <Flex flex={1} justifyContent={'center'}>
    <JumpingBox />
    <JumpingBox delay={100} />
    <JumpingBox delay={200} />
  </Flex>
)

export type ButtonProps = FlexProps &
  VariationsProps & {
    loading?: boolean
    disabled?: boolean
    onClick?: any
    onKeyPress?: any
  }

const ButtonWrapper: React.FC<ButtonProps> = styled(Flex).attrs(
  ({ justifyContent, alignItems }) => ({
    alignItems: alignItems || 'center',
    justifyContent: justifyContent || 'center',
    tabIndex: isMobile ? 'none' : 0,
  })
)`


  // focus
  outline: none;
  box-shadow: 0 0 0 0 #9CABB8;
  transition: all 0.3s ease;
  
  :focus {
     transform: perspective(700px) translateZ(1px);
     box-shadow: 0 2px 10px -4px #9CABB8; 
  }
  
  // extensions
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  // variations
  ${primary}
  ${clear}
  ${noBorder}
`

export const Button: React.FC<ButtonProps> = props => {
  const { disabled, onClick, children, loading } = props
  const handleClick = !disabled && !loading ? onClick : undefined
  const handleKeyPress = !disabled && !loading ? onClick : undefined

  return (
    <ButtonWrapper {...props} onClick={handleClick} onKeyPress={handleKeyPress}>
      {loading && <Loader />}
      {!loading && children}
    </ButtonWrapper>
  )
}
