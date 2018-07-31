import { Map } from 'immutable'
import { findUsers } from './actions'

const initState = Map({
  data: null,
  loading: false,
  error: null,
})

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case findUsers.TRIGGER:
      return state.merge({
        loading: true,
      })
    case findUsers.SUCCESS:
      return state.merge({
        data: action.payload,
      })
    case findUsers.FAILURE:
      return state.merge({
        error: action.payload,
      })
    default:
      return state
  }
}
