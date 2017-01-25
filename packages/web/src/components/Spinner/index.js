/* @flow */

import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  size: number,
  color?: string,
}

const hexToRGBNumbers = (hex: string) => {
  const r = parseInt(hex.substr(1,2),16)
  const g = parseInt(hex.substr(3,2),16)
  const b = parseInt(hex.substr(5,2),16)

  return `${r},${g},${b}`
}

const rotateCentered = keyframes`
  from { transform: rotate(0deg) translate3d(-50%,-50%,0); }

  to { transform: rotate(360deg) translate3d(-50%,-50%,0); }
`

const StyledSpinner = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-top: 1.75em solid;
  border-right: 1.75em solid;
  border-bottom: 1.75em solid;
  border-left: 1.75em solid;
  transform-origin: top left;
  animation: ${rotateCentered} 775ms infinite linear;
  font-size: ${props => props.size}px;
  border-left-color: rgb(${props => hexToRGBNumbers(props.color)});
  border-top-color: rgba(${props => hexToRGBNumbers(props.color)}, 0.2);
  border-right-color: rgba(${props => hexToRGBNumbers(props.color)}, 0.2);
  border-bottom-color: rgba(${props => hexToRGBNumbers(props.color)}, 0.2);

  &,
  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`

const Spinner = ({ color, size }: Props) => <StyledSpinner color={color} size={size} />

Spinner.defaultProps = {
  color: '#000000',
}

export default Spinner
