import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import * as Redux from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { configure } from './store'

const history = createHistory()
const props = {
  store: configure(Map(), history),
}

/**
 * Root provider for application, shipped with `store`
 * and connected `react-router-redux`.
 * @param {Object} props - Descendent React node(s).
 */
const Provider = ({ children }) => (
  <Redux.Provider {...props}>
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
