import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonWithIconAndText from '.'

storiesOf('ButtonWithIconAndText', module)
  .add('default', () => (
    <ButtonWithIconAndText icon="heart">Goodbye</ButtonWithIconAndText>
  ))
