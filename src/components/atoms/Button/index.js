import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from '../../themes/default'

const styles = css`
  font-size: 16px;
  cursor: pointer;
`

const Anchor = styled.a`${styles}`
const Default = styled.button`
  ${styles}
  background-color: ${palette.pink};
  width: auto;
  height: 20px;
`

const Button = ({ type, ...props }) => {
  if (props.href) {
    return <Anchor {...props} />
  }
  return <Default {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
