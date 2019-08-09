import * as React from 'react'
import { Flex, Text } from '../../components/generic'
import { Record } from '../../types'

type RowProps = Record

export const Row: React.FC<RowProps> = ({ gcm }) => {
  return (
    <Flex>
      <Text bold>{gcm}</Text>
    </Flex>
  )
}
