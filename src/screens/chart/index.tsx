import { useState } from 'react'
import * as React from 'react'
import { Fragment } from 'react'
import { RouteComponentProps } from 'react-router'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Box, FadeInFlex, Loader } from '../../components/generic'
import { Query } from '../../context/query'
import { combineRecords, generateYugoslaviaRequests } from '../../context/utils'
import { colors } from '../../theme'
import { RequestParams } from '../../types'
import { Filter } from '../common/filter'

type ChartViewScreenProps = RouteComponentProps & {}
const initState: RequestParams = {
  country: 'HRV',
  variable: 'tas',
  period: 'annualavg',
  fromYear: 1920,
  toYear: 1939,
}

export const ChartViewScreen: React.FC<ChartViewScreenProps> = () => {
  const [requestParams, setRequestParams] = useState<RequestParams>(initState)

  const setField = (value: { [k: string]: any }) => {
    setRequestParams({ ...requestParams, ...value })
  }

  let payloadParams: RequestParams | RequestParams[] = requestParams
  if (requestParams.country === 'YUG') {
    payloadParams = generateYugoslaviaRequests(requestParams)
  }

  return (
    <Fragment>
      <Filter onChange={setField} values={requestParams} />
      <Query requestParams={payloadParams}>
        {({ data, loading }) => {
          if (loading) {
            return (
              <FadeInFlex mt={50} p={20} flex={1}>
                <Loader />
              </FadeInFlex>
            )
          }

          const records = combineRecords(data).map(d => ({
            ...d,
            value: d.annualData[0],
          }))

          // switch to vertical layout on mobile view
          return (
            <Fragment>
              <Box mt={50} display={['none', null, 'block']}>
                <ResponsiveContainer height={600} width={'99%'}>
                  <BarChart data={records}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis interval={0} tick={{ fontSize: 10 }} dataKey="gcm" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill={colors.primary[0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
              <Box mt={50} display={['block', null, 'none']}>
                <ResponsiveContainer height={600} width={'99%'}>
                  <BarChart layout="vertical" data={records}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis
                      type="category"
                      interval={0}
                      tick={{ fontSize: 10 }}
                      dataKey="gcm"
                    />
                    <Tooltip />
                    <Bar dataKey="value" fill={colors.primary[0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Fragment>
          )
        }}
      </Query>
    </Fragment>
  )
}
