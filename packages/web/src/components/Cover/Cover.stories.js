/* @flow */

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'
import Cover from './index'

storiesOf('Cover', module)
  .add('Default', () => (
    <Cover coverUrl={text('Cover', 'https://i1.sndcdn.com/artworks-000197412265-7l4muw-large.jpg')}>
      {text('Children', 'Lorem ipsum dolor sit amet')}
    </Cover>
  ));
