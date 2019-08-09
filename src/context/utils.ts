import { RequestParams } from '../types'

export const createRequestId = ({
  country,
  period,
  variable,
  fromYear,
  toYear,
}: RequestParams) => {
  return `${country}_${period}_${variable}_${fromYear}_${toYear}`
}

export const generateYugoslaviaRequests = () => {

}
