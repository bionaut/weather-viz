import * as React from 'react'
import { StoreContextState } from '../make-context'
import { ACTIONS } from './actions'

export const reducer: React.Reducer<StoreContextState, any> = (
  state,
  action
) => {
  const { key, response } = action.payload
  switch (action.type) {
    case ACTIONS.CACHE_RESPONSE:
      return { ...state, [key]: response }
    default:
      return state
  }
}
