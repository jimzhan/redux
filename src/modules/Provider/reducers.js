import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
// ---------------------------------------------------------------------
// Import all application reducers here & add before `...reducers`.
// ---------------------------------------------------------------------
import { userReducer } from '../User'

/**
 * Merge route into the global application state
 */
function routeReducer(state = fromJS({ location: null }), action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      })
    default:
      return state
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(reducers) {
  return combineReducers({
    route: routeReducer,
    userReducer,
    ...reducers,
  })
}
