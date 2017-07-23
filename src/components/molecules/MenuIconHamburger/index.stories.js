import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuIconHamburger from '.'

storiesOf('MenuIconHamburger', module)
  .add('closed', () => (
    <MenuIconHamburger isOpen={false} />
  ))
  .add('open', () => (
    <MenuIconHamburger isOpen={true} />
  ))
