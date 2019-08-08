import * as React from 'react'
import { Fragment } from 'react'
import { RouteComponentProps } from 'react-router'
import { Text } from '../../components'

type HomeScreenProps = RouteComponentProps & {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Fragment>
      <Text>asdf</Text>
    </Fragment >
  )
}
