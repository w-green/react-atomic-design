import styled, { css } from 'styled-components'
import { primary } from '../../themes/default'

export const Button = styled.button`
  position: absolute;
  background-color: white;
  border: none;
  border-radius: 100%;
  width: 54px;
  height: 54px;
`

export const Icon__closed = styled.span`
  display: block;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -0.0625rem;
  margin-left: auto;
  margin-right: auto;
  background-color: ${primary};

  &, :before, :after {
    width: 1.25rem;
    height: 0.125rem;
    content: '';
    position: absolute;
    left: 0;
  }

  :before, :after {
    background-color: ${primary};
  }

  :before {
    bottom: 5px;
  }

  :after {
    top: 5px;
  }
`

export const Icon__open = Icon__closed.extend`
  background-color: transparent;

  :before {
    top: 0;
    transform: rotate(-45deg);
  }

  :after {
    top: 0;
    transform: rotate(45deg);
  }
`

export const HiddenDescription = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px ;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
