import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Button,
  Icon,
  Input,
  Checkbox,
  Layout,
} from 'antd'

/* -------------------- Styled Controls -------------------- */
const Wrapper = styled.div`
  max-width: 500px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #001529;
`

const Header = styled(Layout.Header)`
  color: white;
  padding-left: 10px;
`
/* -------------------- End of Styled Controls -------------------- */
const { Item } = Form

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired, // eslint-disable-line
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)  // eslint-disable-line
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props

    return (
      <Wrapper>
        <Header>
          Login
        </Header>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: '30px' }}>
          <Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />)}
          </Item>
          <Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />)}
          </Item>
          <Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>
                Remember me
              </Checkbox>,
            )}
            <a href="#forgot" style={{ float: 'right' }}>
              Forgot password
            </a>
            <Button
              htmlType="submit"
              style={{ width: '100%' }}
            >
              Log in
            </Button>
            <span>
              Or&nbsp;
            </span>
            <a href="#signup">
              register now!
            </a>
          </Item>
        </Form>
      </Wrapper>
    )
  }
}

export default Form.create()(Login)
