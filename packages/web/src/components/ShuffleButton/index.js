/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import IconShuffle from '../IconShuffle'

const Button = styled.div`
  box-sizing: border-box;
  position: fixed;
  background: ${props => props.active ? '#000' : '#fff'};
  bottom: 10px;
  right: 70px;
  width: 45px;
  height: 45px;
  padding: 10px;
  z-index: 111;
  cursor: pointer;

  @media (min-width: 700px) {
    bottom: auto;
    top: 10px;
    right: 70px;
  }
`

type ShuffleProps = {
  active: boolean,
  handleClick: Function,
}

class ShuffleButton extends PureComponent {

  handleClick: Function

  constructor(props: ShuffleProps) {
    super(props)

    this.handleClick = props.handleClick.bind(this)
  }

  render() {
    const { active } = this.props

    return (
      <Button onClick={this.handleClick} active={active}>
        <IconShuffle fill={active ? '#fff' : '#000'} />
      </Button>
    )
  }

}

export default ShuffleButton
