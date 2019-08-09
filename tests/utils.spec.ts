import { createRequestId } from '../src/context/utils'
import { RequestParams } from '../src/types'

const params: RequestParams = {
  country: 'HRV',
  variable: 'pr',
  period: 'annualavg',
  fromYear: 1920,
  toYear: 1939
}

test('should create createRequest id for caching', () => {
  expect(createRequestId(params)).toEqual('HRV_annualavg_pr_1920_1939')
})