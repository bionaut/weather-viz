import * as React from 'react'
import { Fragment, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Flex } from '../../components/generic'
import { Query } from '../../context/query'
import { RequestParams } from '../../types'
import { Filter } from '../common/filter'

type TableViewScreenProps = RouteComponentProps & {}

const initState: RequestParams = {
  country: 'HRV',
  variable: 'tas',
  period: 'mavg',
  fromYear: 1920,
  toYear: 1939,
}

export const TableViewScreen: React.FC<TableViewScreenProps> = () => {
  const [requestParams, setPayload] = useState<RequestParams>(initState)

  const setField = (value: { [k: string]: any }) => {
    setPayload({ ...requestParams, ...value })
  }

  return (
    <Fragment>
      <Filter onChange={setField} values={requestParams} />
      <br />
      <br />
      {/*<Flex background={'blue'}>stats</Flex>*/}
      <Query requestParams={requestParams}>
        {(r) => <Flex background={'gray'}>{JSON.stringify(r)}</Flex>}
      </Query>
    </Fragment>
  )
}
