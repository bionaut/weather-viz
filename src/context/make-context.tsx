import { last } from 'ramda'
import * as React from 'react'
import { createContext, useContext, useMemo, useReducer } from 'react'
import { createRequest } from '../client'
import { Record, RequestParams } from '../types'
import { ACTIONS } from './store/actions'
import { initState } from './store/init-state'
import { reducer } from './store/reducer'
import { createRequestId } from './utils'

export type StoreContextState = { [k: string]: Record[] }
export type StoreContextOperations = {
  cachedRequest: (params: RequestParams) => void
  getCachedResponse: (params: RequestParams) => Record[]
  appendRecord: (params: RequestParams, name: string) => void
}

export const makeStoreContext = () => {
  const context: React.Context<{
    state: StoreContextState
    operations: StoreContextOperations
    // @ts-ignore
  }> = createContext()

  const StoreProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const operations: StoreContextOperations = {
      getCachedResponse: params => {
        const key = createRequestId(params)
        return state[key] || null
      },
      appendRecord: (params, name) => {
        const key = createRequestId(params)
        const cached = operations.getCachedResponse(params)
        const sample = last(cached)
        const modified = [
          ...cached,
          {
            ...sample,
            monthVals: new Array(12).fill(1).map(() => Math.random() * 20),
            annualData: [Math.random() * 20],
            gcm: name,
          },
        ]
        dispatch({
          type: ACTIONS.CACHE_RESPONSE,
          payload: { key, response: modified },
        })
      },
      cachedRequest: async params => {
        const key = createRequestId(params)
        try {
          const { data } = await createRequest(params)
          dispatch({
            type: ACTIONS.CACHE_RESPONSE,
            payload: { key, response: data },
          })
        } catch (e) {
          alert('Unable to fetch data from server!')
        }
      },
    }

    const contextValue = useMemo(() => ({ state, operations }), [
      state,
      operations,
    ])
    return <context.Provider value={contextValue}>{children}</context.Provider>
  }

  const useStore = () => useContext(context)

  return { StoreProvider, useStore }
}
