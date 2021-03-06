import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Row, Col } from 'antd'
import Header from './Header'
import Footer from './Footer'

// FIX https://www.caniuse.com/#search=flex-direction on IE 10/11.
const Wrapper = styled.div`
  display: flex;
  flex-direction: 'row';
`

const Container = styled(Layout)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled(Layout.Content)`
  flex: 1;
  margin-top: 100px;
  min-width: 1024px;
  min-height: 768px;
`

const FlexLayout = ({ children }) => (
  <Wrapper>
    <Container>
      <Header />
      <Content>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={1} />
          <Col span={10}>
            {children}
          </Col>
          <Col span={1} />
        </Row>
      </Content>
      <Footer />
    </Container>
  </Wrapper>
)

FlexLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default FlexLayout
