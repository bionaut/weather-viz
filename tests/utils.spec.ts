import {
  averageMonthValues,
  combineRecords,
  createRequestId,
  generateYugoslaviaRequests,
} from '../src/context/utils'
import { Record, RequestParams } from '../src/types'

const params: RequestParams = {
  country: 'HRV',
  variable: 'pr',
  period: 'annualavg',
  fromYear: 1920,
  toYear: 1939,
}

test('should create createRequest id for caching', () => {
  expect(createRequestId(params)).toEqual('HRV_annualavg_pr_1920_1939')
})


test('should get average of all months', () => {
  const data: Record[] = [
    {
      gcm: 'ochmonek',
      variable: 'pr',
      monthVals: [1, 2, 3],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
    {
      gcm: 'yyy',
      variable: 'pr',
      monthVals: [2, 3, 3],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
  ]

  expect(averageMonthValues(data)).toEqual([1.5, 2.5, 3])

})

test('should merge and average duplicate gcm items', () => {
  const data: Record[] = [
    {
      gcm: 'ochmonek',
      variable: 'pr',
      monthVals: [1, 2, 3],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
    {
      gcm: 'ochmonek',
      variable: 'pr',
      monthVals: [2, 3, 4],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
    {
      gcm: 'yyy',
      variable: 'pr',
      monthVals: [3, 1, 3],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
  ]
  const actual = combineRecords(data)
  const expected = [
    {
      gcm: 'ochmonek',
      variable: 'pr',
      monthVals: [1.5, 2.5, 3.5],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
    {
      gcm: 'yyy',
      variable: 'pr',
      monthVals: [3, 1, 3],
      annualData: [1],
      fromYear: 1920,
      toYear: 1939,
    },
  ]

  expect(actual).toEqual(expected)
})

test('should create yugoslavian payload', () => {
  const params: RequestParams = {
    country: 'YUG',
    variable: 'pr',
    period: 'annualavg',
    fromYear: 1920,
    toYear: 1923,
  }

  expect(generateYugoslaviaRequests(params)).toEqual([
    {
      country: 'HRV',
      fromYear: 1920,
      period: 'annualavg',
      toYear: 1923,
      variable: 'pr',
    },
    {
      country: 'BIH',
      fromYear: 1920,
      period: 'annualavg',
      toYear: 1923,
      variable: 'pr',
    },
    {
      country: 'SVN',
      fromYear: 1920,
      period: 'annualavg',
      toYear: 1923,
      variable: 'pr',
    },
    {
      country: 'SRB',
      fromYear: 1920,
      period: 'annualavg',
      toYear: 1923,
      variable: 'pr',
    },
    {
      country: 'MNE',
      fromYear: 1920,
      period: 'annualavg',
      toYear: 1923,
      variable: 'pr',
    },
    {
      country: 'MKD',
      fromYear: 1920,
      period: 'annualavg',
      toYear: 1923,
      variable: 'pr',
    },
  ])
})
