/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import Track from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Track
      artist={{ username: 'John Doe' }}
      title="Lorem Ipsum"
      playing={true}
      permalink="permalink"
      id={2}
      duration={42}
    />, div
  )
})
