import React from 'react'
import propTypes from 'prop-types'

import { Icon, Button } from 'components'

const ButtonWithIconAndText = (props) => (
  <Button>
    <Icon icon={props.icon} />
    Hello goodbye
  </Button>
)

export default ButtonWithIconAndText
