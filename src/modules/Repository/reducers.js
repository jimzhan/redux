import { fetchRepository } from './actions'

const initState = {
  data: null,
  loading: false,
  error: null,
}

export default function repositoryReducer(state = initState, action) {
  switch (action.type) {
    case fetchRepository.TRIGGER:
      return {
        ...state,
        loading: true,
      }
    case fetchRepository.SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case fetchRepository.FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case fetchRepository.FULFILL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
