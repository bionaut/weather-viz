import * as React from 'react'
import { Box, Flex, Text } from '../../components/generic'
import { center } from '../../components/presets'

type PrecipitationProps = { value: number }

export const Precipitation: React.FC<PrecipitationProps> = ({ value }) => {
  return (
    <Flex {...center} height={50}>
      <Box
        position={'absolute'}
        bottom={0}
        height={`${value < 100 ? value : 100}%`}
        width={'100%'}
        background={'primary.2'}
      />
      <Text fontSize={[10, 12, 15, 20]} color={'gray.1'}>
        {value.toFixed(1)}
      </Text>
    </Flex>
  )
}
