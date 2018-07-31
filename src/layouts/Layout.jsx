import React from 'react'
import PropTypes from 'prop-types'
import { Layout as AntLayout } from 'antd'
import { Content, Header } from '../components'

const Layout = ({ children }) => (
  <AntLayout>
    <Header>
Application Header
    </Header>
    <Content>
      {children}
    </Content>
  </AntLayout>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
