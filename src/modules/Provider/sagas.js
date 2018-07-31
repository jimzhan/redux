import { all } from 'redux-saga/effects'
// ---------------------------------------------------------------------
// Import all application sagas here & add before.
// ---------------------------------------------------------------------
import { UserSaga } from '../User'


export default function* root() {
  yield all([
    UserSaga.watchFindUsers,
  ])
}
