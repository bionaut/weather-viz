import * as React from 'react'
import { breakpoints } from '../../theme'
import { Box, BoxProps, Flex, Screen } from '../generic'
import { boxShadow } from '../presets'

type SimpleLayoutProps = BoxProps & {
  header: React.ReactNode
  accentColor?: string
}

export const SimpleLayout: React.FC<SimpleLayoutProps> = ({
  accentColor,
  header,
  children,
  ...rest
}) => {
  return (
    <Screen zIndex={1} flex={1}  overflow={'auto'}>
      <Flex flex={1} flexDirection={'column'} alignItems={'center'}>
        <Box
          top={120}
          position={'absolute'}
          width={['100%', null, null, breakpoints[2]]}
          borderRadius={'radius'}
          background={'white'}
          minHeight={'calc(100% - 120px)'}
          p={20}
          {...rest}
        >
          {children}
        </Box>
        <Flex
          position={'fixed'}
          width={'100%'}
          top={0}
          left={0}
          background={accentColor}
          justifyContent={'center'}
          {...boxShadow}
        >
          <Flex width={['100%']}>{header}</Flex>
        </Flex>
      </Flex>
    </Screen>
  )
}
