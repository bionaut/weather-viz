import * as React from 'react'
import { Flex, Text } from '../../components/generic'
import { center } from '../../components/presets'

type TemperatureProps = { value: number }

const colors = ['#4c76ff', '#8491b1', '#af9f86', '#da9121', '#C95F21']

export const Temperature: React.FC<TemperatureProps> = ({ value }) => {
  let color = '#5b6477'

  if (value < 0) {
    color = colors[0]
  }

  if (value < 5) {
    color = colors[1]
  }

  if (value > 10) {
    color = colors[2]
  }

  if (value > 20) {
    color = colors[3]
  }

  if (value > 27) {
    color = colors[3]
  }

  return (
    <Flex {...center} height={50}>
      <Text fontSize={[10, 12, 15, 20]} color={color}>
        {value.toFixed(1)}
      </Text>
    </Flex>
  )
}
