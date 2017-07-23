import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-template-rows: repeat([row] auto);
  grid-gap: 10px;
  min-height: 100vh;
  box-sizing: border-box;
`

// const Header = styled.header`
//   grid-column:
// `
