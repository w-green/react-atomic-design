import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.li`
  border-bottom: 1px solid #eeeeee;
  list-style: none;
  padding: 1rem 0.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
`
const MenuItem = ({children}) => {
  return (
    <Item>{children}</Item>
  )
}

MenuItem.propTypes = {
  children: PropTypes.node,
}

export default MenuItem
