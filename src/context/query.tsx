import { filter, flatten, map, pipe } from 'ramda'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Record, RequestParams } from '../types'
import { useStore } from './index'


type QueryResult = {
  data?: any
  loading?: boolean
  errors?: any
}

type QueryProps = {
  requestParams: RequestParams | RequestParams[]
  children: (result: QueryResult) => any
}

export const Query: React.FC<QueryProps> = ({ requestParams, children }) => {
  const {
    operations: { cachedRequest, getCachedResponse },
  } = useStore()

  const [loading, setLoading] = useState(false)
  const [errors] = useState(null)

  const params = flatten([requestParams]) as RequestParams[]

  const data = pipe(
    map<any, Record[]>(p => getCachedResponse(p)),
    filter(v => !!v),
    flatten
  )(params)

  const result = { data, loading, errors }

  const requestData = async () => {
    setLoading(true)
    await Promise.all(
      params.map(async p => {
        const cached = getCachedResponse(p)

        if (cached) {
          return
        }
        return cachedRequest(p)
      })
    )
    setLoading(false)
  }

  useEffect(() => {
    requestData()
    // eslint-disable-next-line
  }, [requestParams])

  return children(result)
}
