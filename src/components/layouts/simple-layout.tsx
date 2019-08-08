import * as React from 'react'
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
    <Screen zIndex={1} flex={1} background={'gray.2'} overflow={'auto'}>
      <Flex flex={1} flexDirection={'column'} alignItems={'center'} pt={[100]}>
        <Box
          position={'absolute'}
          width={['100%', null, null, null, null, '1300px']}
          mt={['-30px']}
          borderRadius={'radius'}
          background={'gray'}
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
          <Flex
            width={['100%', null, null, null, null, '1300px']}
            px={'padding.0'}
          >
            {header}
          </Flex>
        </Flex>
      </Flex>
    </Screen>
  )
}
