import * as React from 'react'
import { createContext, useContext, useMemo, useReducer } from 'react'
import { toast } from 'react-toastify'
import { createRequest } from '../client'
import { RequestParams } from '../types'
import { ACTIONS } from './store/actions'
import { initState } from './store/init-state'
import { reducer } from './store/reducer'

export type StoreContextState = {}
export type StoreContextOperations = {
  fetchCountryData: (params: RequestParams) => void
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
      fetchCountryData: async params => {

        // todo params |> getFromCacheFirst |> fetchIfDataMissing |> handleResults |> dispatch(RECEIVED)

        try {
          const data = await createRequest(params)
          if (data) {
            dispatch({ type: ACTIONS.RECEIVED, payload: { data } })
          }
        } catch (e) {
          toast('Bad createRequest!', { type: 'error' })
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
