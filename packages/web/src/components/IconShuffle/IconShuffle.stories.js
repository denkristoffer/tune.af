/* @flow */

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { color } from '@kadira/storybook-addon-knobs'
import IconShuffle from './index'

storiesOf('IconShuffle', module)
  .add('Default', () => (
    <IconShuffle
      fill={color('Fill', '#000')}
    />
  ))
