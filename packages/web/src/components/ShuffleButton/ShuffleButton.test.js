/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import ShuffleButton from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ShuffleButton
      handleClick={() => {}}
    />, div
  )
})
