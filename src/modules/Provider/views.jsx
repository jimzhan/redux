import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import * as Redux from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { configure } from './store'
import sagas from './sagas'

const history = createHistory()
const store = configure(Map(), history)

store.runSaga(sagas)

/**
 * Root provider for application, shipped with `store`
 * and connected `react-router-redux`.
 * @param {Object} props - Descendent React node(s).
 */
const Provider = ({ children }) => (
  <Redux.Provider store={store}>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Redux.Provider>
)

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Provider
