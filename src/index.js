import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { App, Provider } from './modules'

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    MOUNT_NODE,
  )
}

render()
