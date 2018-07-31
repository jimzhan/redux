import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'

const StyledFooter = styled(Layout.Footer)`
  text-align: center;
`

const Footer = ({ children }) => (
  <StyledFooter>
    {children}
  </StyledFooter>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Footer.defaultProps = {
  children: '©2018 Created by Jim',
}

export default Footer
