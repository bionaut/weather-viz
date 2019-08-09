import * as React from 'react'
import { ACTIONS } from './actions'
import { StoreContextState } from '../make-context'

export const reducer: React.Reducer<StoreContextState, any> = (
  state,
  action
) => {
  switch (action.type) {
    case ACTIONS.RECEIVED:
      // check if in cache
      // if not fetch

      return { ...state }
    default:
      return state
  }
}
