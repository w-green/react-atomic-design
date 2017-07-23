import React from 'react'
import { mount, shallow } from 'enzyme'
import MenuIconHamburger from '.'

const wrap = (props = {}) => shallow(<MenuIconHamburger {...props} />)

it('mounts with the isOpen prop', function() {
  mount(<MenuIconHamburger isOpen={false} />)
  mount(<MenuIconHamburger isOpen={true} />)
})

it('assigns true to aria-expanded if isOpen prop is true', function() {
  const wrapper = wrap({ isOpen: true })

  expect(wrapper.find({ 'aria-expanded': true })).toHaveLength(1);
})

it('assigns false to aria-expanded if isOpen prop is false', function() {
  const wrapper = wrap({ isOpen: false })

  expect(wrapper.find({ 'aria-expanded': false })).toHaveLength(1);
})
