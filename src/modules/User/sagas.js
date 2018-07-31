import { call, put, takeLatest } from 'redux-saga/effects'
import { findUsers } from './actions'
import { GraphQL } from '../../services'
import { allUsers } from './schema'


export const watchFindUsers = takeLatest(findUsers.TRIGGER, function* generator() {
  const params = {
    query: allUsers,
    fetchPolicy: 'network-only',
  }
  try {
    const { data } = yield call(GraphQL.query, params)
    yield put(findUsers.success(data.allUsers))
  } catch (error) {
    yield put(findUsers.failure(error))
  }
})
