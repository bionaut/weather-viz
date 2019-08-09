import * as React from 'react'
import { Box, Flex, FlexProps, Text } from '../generic'

export type PanelProps = FlexProps & {
  title?: React.ReactElement | React.ClassicElement<any> | string
}

export const Panel: React.FC<PanelProps> = ({ title, children, ...rest }) => (
  <Flex
    flexDirection={'column'}
    background={'white'}
    border={'1px solid'}
    borderColor={'border'}
    {...rest}
  >
    {title && <Box>{title}</Box>}
    {children}
  </Flex>
)

export const PanelHeader: React.FC<PanelProps> = ({
  title,
  children,
  ...rest
}) => (
  <Flex
    alignItems={'center'}
    justifyContent={'flex-start'}
    height={['auto', 'headerHeight']}
    borderBottom={'1px solid'}
    borderColor={'border'}
    px={'padding.1'}
    {...rest}
  >
    <Text color={'gray.1'} fontWeight={800} fontSize={20}>
      {title}
    </Text>
    {children}
  </Flex>
)
