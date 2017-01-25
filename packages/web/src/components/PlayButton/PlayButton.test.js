/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import PlayButton from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <PlayButton
      handleClick={() => {}}
    />, div
  )
})
