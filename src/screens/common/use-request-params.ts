import { useState } from 'react'
import { generateYugoslaviaRequests } from '../../context/utils'
import { RequestParams } from '../../types'

export const useRequestParams = (initState: RequestParams) => {
  const [requestParams, setRequestParams] = useState<RequestParams>(initState)

  const setField = (value: { [k: string]: any }) => {
    setRequestParams({ ...requestParams, ...value })
  }

  let payloadParams: RequestParams | RequestParams[] = requestParams
  if (requestParams.country === 'YUG') {
    payloadParams = generateYugoslaviaRequests(requestParams)
  }
  return {requestParams, payloadParams, setField}
}