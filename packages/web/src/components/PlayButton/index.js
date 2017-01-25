/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import IconPlay from '../IconPlay'
import IconPause from '../IconPause'

const Button = styled.div`
  box-sizing: border-box;
  position: fixed;
  background: ${props => props.playing ? '#fff' : '#000'};
  bottom: 10px;
  right: 10px;
  width: 45px;
  height: 45px;
  padding: 10px;
  z-index: 111;
  cursor: pointer;

  @media (min-width: 700px) {
    bottom: auto;
    top: 10px;
    right: 10px;
  }
`

type PlayProps = {
  playing: boolean,
  handleClick: Function,
}

class PlayButton extends PureComponent {

  handleClick: Function

  constructor(props: PlayProps) {
    super(props)

    this.handleClick = props.handleClick.bind(this)
  }

  render() {
    const { playing } = this.props

    return (
      <Button onClick={this.handleClick} playing={playing}>
        {playing ?
          <IconPause /> :
          <IconPlay fill="#fff" />
        }
      </Button>
    )
  }

}

export default PlayButton
