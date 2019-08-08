import styled, { keyframes } from 'styled-components'
import { Flex } from './flex'

const popInAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
  opacity: 1;
  transform: translateY(0);
  }  
`

export const FadeInFlex = styled(Flex)`
  animation-name: ${popInAnimation};
  animation-duration: 0.1s;
`
