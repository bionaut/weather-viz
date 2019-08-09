import { map, median, pipe, zip } from 'ramda'
import { Record, RequestParams } from '../types'
import { COUNTRIES } from './catalogs'

const zipValues = (
  item: Record,
  acc: number[],
  field: 'monthVals' | 'annualData'
) => zip(item[field] || [], acc)

const averageValues = pipe(map(median))

export const createRequestId = ({
  country,
  period,
  variable,
  fromYear,
  toYear,
}: RequestParams) => {
  return `${country}_${period}_${variable}_${fromYear}_${toYear}`
}

export const generateYugoslaviaRequests = (
  params: RequestParams
): RequestParams[] => {
  return COUNTRIES.slice(0, -1).map(([country]): any => ({
    ...params,
    country,
  }))
}

export const combineRecords = (data: Record[]): Record[] => {
  const gcms = data.reduce<{ [k: string]: Record }>((acc, item) => {
    if (acc[item.gcm]) {
      const curMnthData = acc[item.gcm].monthVals || []
      const avgMnthData = averageValues(
        zipValues(item, curMnthData, 'monthVals')
      )

      const curAnnualData = acc[item.gcm].annualData || []
      const avgAnnualData = averageValues(
        zipValues(item, curAnnualData, 'annualData')
      )

      return {
        ...acc,
        [item.gcm]: {
          ...acc[item.gcm],
          monthVals: avgMnthData,
          annualData: avgAnnualData,
        },
      }
    }
    return { ...acc, [item.gcm]: item }
  }, {})

  return Object.values(gcms)
}

export const averageMonthValues = (data: Record[]): number[] => {
  return data.reduce((acc: number[], record) => {
    if (acc.length === 0) {
      return record.monthVals
    }
    const zipped = zipValues(record, acc, 'monthVals')
    return averageValues(zipped)
  }, [])
}
