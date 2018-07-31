import User from './views'
import * as UserSaga from './sagas'

export default User
export { default as userReducer } from './reducers'
export {
  UserSaga,
}
