/* @flow */

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { color } from '@kadira/storybook-addon-knobs'
import IconPlay from './index'

storiesOf('IconPlay', module)
  .add('Default', () => (
    <IconPlay
      fill={color('Fill', '#000')}
    />
  ))
