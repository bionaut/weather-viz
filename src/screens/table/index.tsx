import * as React from 'react'
import { Fragment, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { FadeInFlex, Flex, Grid, Loader, Text } from '../../components/generic'
import { MONTHS } from '../../context/catalogs'
import { Query } from '../../context/query'
import {
  averageMonthValues,
  combineRecords,
  generateYugoslaviaRequests,
} from '../../context/utils'
import { Record, RequestParams } from '../../types'
import { Filter } from '../common/filter'
import { Average } from './average'
import { Precipitation } from './precipitation'
import { Temperature } from './temperature'

type TableViewScreenProps = RouteComponentProps & {}

const initState: RequestParams = {
  country: 'HRV',
  variable: 'tas',
  period: 'mavg',
  fromYear: 1920,
  toYear: 1939,
}

const textPreset = {
  fontSize: [10, 12, 15, 20],
}

export const TableViewScreen: React.FC<TableViewScreenProps> = () => {
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
        {({ data, loading, errors }) => {
          if (loading) {
            return (
              <FadeInFlex mt={50} p={20} flex={1}>
                <Loader />
              </FadeInFlex>
            )
          }

          // average month values
          const records = combineRecords(data)

          // get average for each month by averaging all gcms
          const averageValues = averageMonthValues(records)

          return (
            <Flex flexDirection={'column'} mt={30} background={'gray'}>
              <Grid
                alignItems={'center'}
                gridTemplateColumns={'1fr 12fr'}
                gridTemplateRows={'80px'}
                my={20}
              >
                <Text fontSize={1}>Average</Text>
                <Flex height={80} flex={1}>
                  <Average data={averageValues} />
                </Flex>
              </Grid>
              <Grid
                gridTemplateColumns={'repeat(13, 1fr)'}
                justifyItems={'center'}
                py={20}
                borderBottom={'1px solid'}
                borderColor={'border'}
              >
                <Text {...textPreset} bold>
                  GCM
                </Text>
                {MONTHS.map(m => (
                  <Text {...textPreset}>{m}</Text>
                ))}
              </Grid>
              {records.map((item: Record) => {
                const key = `${item.gcm}${item.variable}${item.fromYear}${item.toYear}`
                return (
                  <Grid
                    key={key}
                    width={'100%'}
                    gridTemplateColumns={'repeat(13, 1fr)'}
                    alignItems={'center'}
                    my={5}
                  >
                    <Text textAlign={'left'} fontSize={[10, 11, 14]}>
                      {item.gcm.split('_').join(' ')}
                    </Text>
                    {item.monthVals.map(val => (
                      <Fragment key={key + val}>
                        {item.variable === 'tas' && <Temperature value={val} />}
                        {item.variable === 'pr' && (
                          <Precipitation value={val} />
                        )}
                      </Fragment>
                    ))}
                  </Grid>
                )
              })}
            </Flex>
          )
        }}
      </Query>
    </Fragment>
  )
}
