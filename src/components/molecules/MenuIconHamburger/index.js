import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon__closed, Icon__open, HiddenDescription } from './css'

const MenuIconHamburger = ({ isOpen, ...props }) => {
  let Icon = Icon__closed

  if (isOpen) {
    Icon = Icon__open
  }

  return (
    <Button type="button" aria-expanded={isOpen}>
      <Icon />
      <HiddenDescription>Menu</HiddenDescription>
    </Button>
  )
}

MenuIconHamburger.propTypes = {
  isOpen: PropTypes.bool,
}

export default MenuIconHamburger
