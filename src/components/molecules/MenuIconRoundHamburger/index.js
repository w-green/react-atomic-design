import React from 'react'
import styled from 'styled-components'
import { primary } from '../../themes/default'

const Button = styled.button`
  position: absolute;
  background-color: ${primary};
  border: none;
  border-radius: 100%;
  width: 54px;
  height: 54px;
`
const Icon = styled.span`
  display: block;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -0.0625rem;
  margin-left: auto;
  margin-right: auto;

  &, :before, :after {
    background-color: white;
    width: 1.25rem;
    height: 0.125rem;
    content: '';
    position: absolute;
    left: 0;
  }

  :before {
    bottom: 5px;
  }

  :after {
    top: 5px;
  }
`
const HiddenDescription = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px ;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
const MenuIconHamburgerRound = () => {
  return (
    <Button type="button" aria-expanded="false">
      <Icon />
      <HiddenDescription>Menu</HiddenDescription>
    </Button>
  )
}

export default MenuIconHamburgerRound
