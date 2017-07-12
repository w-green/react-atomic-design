import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => (
    <Button>button text</Button>
  ))
  .add('pink', () => (
    <Button color="pink">button text</Button>
  ))
  .add('link', () => (
    <Button href="http://something.com">button text</Button>
  ))
