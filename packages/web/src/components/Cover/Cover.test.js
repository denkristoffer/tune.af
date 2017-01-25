/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import Cover from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Cover
      coverUrl="https://i1.sndcdn.com/artworks-000197412265-7l4muw-large.jpg"
    />, div
  )
})
