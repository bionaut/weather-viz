import { FC } from 'react'
import * as React from 'react'
import { IoIosMenu, IoMdAdd } from 'react-icons/io'
import { TiWorld } from 'react-icons/ti'
import { Box, BoxProps, Button, Flex, Text } from '../generic'
import { TabButton } from './tab-button'

type HeaderProps = {}

const Logo: FC<BoxProps> = props => (
  <Box {...props}>
    <TiWorld color={'#4480FA'} size={30} />
  </Box>
)

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex flex={1} height={120} flexDirection={'column'}>
      <Flex justifyContent={'space-between'}>
        <Button height={50} width={50}>
          <IoIosMenu size={30} />
        </Button>
        <Logo mt={10} />
        <Button width={40} height={40} background={'primary.0'}>
          <IoMdAdd size={20} color={'white'} />
        </Button>
      </Flex>
      <Flex flex={1} alignItems={'flex-end'}>
        <TabButton active={true}>
          <Text>Table view</Text>
        </TabButton >
        <TabButton>
          <Text>Chart View</Text>
        </TabButton >
      </Flex>
    </Flex>
  )
}
