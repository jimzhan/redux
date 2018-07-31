import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import App from './views'
import Home from '../Home'

describe('<App />', () => {
  it('renders <App /> components', () => {
    const wrapper = shallow(<App />)
    const flag = wrapper.contains(<Route exact path="/" component={Home} />)
    expect(flag).toBeTruthy()
  })
})
