import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuItem from '.'

storiesOf('MenuItem', module)
  .add('Text', () => (
    <ul>
      <MenuItem>gyroh LL</MenuItem>
    </ul>
  ))
  .add('Link', () => (
    <ul>
      <MenuItem><a href="#">a link</a></MenuItem>
    </ul>
  ))
