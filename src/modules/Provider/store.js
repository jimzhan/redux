import { Map } from 'immutable'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import createReducer from './reducers'

// @TODO divide this to production & development.

const sagaMiddleware = createSagaMiddleware()

export const configure = (history) => {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // @TODO remove it when `react-router-redux` v5 is out of beta.
      shouldHotReload: false,
    })
    : compose
  /* eslint-enable */

  const initialState = Map()
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(logger),
      ...enhancers,
    ),
  )

  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {}
  store.injectedSagas = {}
  store.close = () => store.dispatch(END)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
      store.dispatch({ type: '@@REDUCER_INJECTED' })
    })
  }
  return store
}
