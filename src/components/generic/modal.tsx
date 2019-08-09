import * as React from 'react'
import { SyntheticEvent } from 'react'
import { MdClose } from 'react-icons/md'
import { Button, FadeInFlex, Flex, Screen, Text } from '../generic'
import { modalControls } from '../presets'
import { Panel, PanelProps } from './panel'

export type ModalProps = PanelProps & {
  controls?: React.ReactElement
  orientation?: 'left' | 'right' | 'center'
  onClose?(ev?: SyntheticEvent): void
}

const justifyOrientation = (orientation: string) => {
  switch (orientation) {
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    default:
      return 'center'
  }
}

export const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  children,
  controls,
  orientation = 'center',
  ...rest
}) => {
  const Title = (
    <Flex
      flex={1}
      alignItems={'center'}
      justifyContent={'space-between'}
      height={['headerHeight']}
      borderBottom={'1px solid'}
      borderColor={'border'}
      px={'padding.1'}
    >
      <Text color={'gray.1'} fontWeight={800} fontSize={[15, 18, 20]}>
        {title}
      </Text>
      {onClose && (
        <Button p={10} onClick={onClose}>
          <MdClose color={'gray'} size={20} />
        </Button>
      )}
    </Flex>
  )

  return (
    <Screen
      background={'rgba(0, 0, 0, 0.4)'}
      position={'fixed'}
      zIndex={100}
      onClick={onClose}
      overflow={'auto'}
      justifyContent={justifyOrientation(orientation)}
      alignItems={['flex-start', null, null, 'center']}
    >
      <FadeInFlex
        boxShadow={'0 2px 10px -8px black'}
        flexDirection={'column'}
        {...rest}
      >
        <Panel flex={1} title={Title} border={'none'}>
          {children}
        </Panel>
        {controls && <Flex {...modalControls}>{controls}</Flex>}
      </FadeInFlex>
    </Screen>
  )
}
