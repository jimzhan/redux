import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './styles.less'
import { FlexLayout } from '../../layouts'

import Home from '../Home'
import Login from '../Login'
import User from '../User'

export default () => (
  <FlexLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={User} />
    </Switch>
  </FlexLayout>
)
