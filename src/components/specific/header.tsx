import { FC } from 'react'
import * as React from 'react'
import { IoIosMenu, IoIosPerson } from 'react-icons/io'
import { TiWorld } from 'react-icons/ti'
import useRouter from 'use-react-router'
import { breakpoints } from '../../theme'
import { BoxProps, Flex, Text } from '../generic'
import { center } from '../presets'
import { TabButton } from './tab-button'

type HeaderProps = {}

const Logo: FC<BoxProps> = props => (
  <Flex {...center} {...props}>
    <Text fontSize={15}>Some</Text>
    <TiWorld color={'#4480FA'} size={30} />
    <Text fontSize={15}>Logo</Text>
  </Flex>
)

export const Header: React.FC<HeaderProps> = () => {
  const { history, location } = useRouter()
  return (
    <Flex flex={1} height={120} flexDirection={'column'}>
      <Flex justifyContent={'space-between'} px={20}>
        <Flex {...center} height={50} width={50}>
          <IoIosMenu size={30} />
        </Flex>
        <Logo mt={10} />
        <Flex
          m={5}
          width={40}
          height={40}
          background={'primary.0'}
          borderRadius={20}
          {...center}
        >
          <IoIosPerson size={20} color={'white'} />
        </Flex>
      </Flex>
      <Flex
        alignSelf={'center'}
        width={['100%', null, null, breakpoints[2]]}
        flex={1}
        alignItems={'flex-end'}
      >
        <TabButton
          active={location.pathname === '/table'}
          onClick={() => history.push('/table')}
        >
          <Text>Table view</Text>
        </TabButton>
        <TabButton
          active={location.pathname === '/chart'}
          onClick={() => history.push('/chart')}
        >
          <Text>Chart View</Text>
        </TabButton>
      </Flex>
    </Flex>
  )
}
