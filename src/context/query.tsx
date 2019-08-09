import { useEffect, useState } from 'react'
import * as React from 'react'
import { createRequest } from '../client'
import { RequestParams } from '../types'
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
  const { state } = useStore()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const result = { data, loading, errors }

  const fetchData = async (requestParams: RequestParams | RequestParams[]) => {
    setLoading(true)

    // todo check cache first

    if (Array.isArray(requestParams)) {
      // todo ...
    } else {
      const { data } = await createRequest(requestParams)
      setData(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(requestParams)
  }, [requestParams])

  return children(result)
}
