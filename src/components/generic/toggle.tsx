import * as React from 'react'
import { boxShadow } from '../presets'
import { Box } from './box'
import { Button, ButtonProps } from './button'
import { Flex } from './flex'

type ToggleProps = ButtonProps & {
  value?: boolean
}

export const Toggle: React.FC<ToggleProps> = ({ value, children, ...rest }) => (
  <Flex alignItems={'center'}>
    <Button
      borderRadius={15}
      width={50}
      height={30}
      alignItems={'center'}
      background={value ? 'primary.1' : 'gray.1'}
      borderColor={value ? 'primary.1' : 'border'}
      justifyContent={value ? 'flex-end' : 'flex-start'}
      px={1}
      {...rest}
    >
      <Box
        width={26}
        height={26}
        background={'white'}
        borderRadius={15}
        {...boxShadow}
      />
    </Button>
    {children}
  </Flex>
)
