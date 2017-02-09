/* @flow */

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { color } from '@kadira/storybook-addon-knobs'
import IconPause from './index'

storiesOf('IconPause', module)
  .add('Default', () => (
    <IconPause
      fill={color('Fill', '#000')}
    />
  ))
