/* @flow */

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { color, number } from '@kadira/storybook-addon-knobs'
import Spinner from './index'


storiesOf('Spinner', module)
  .add('Default', () => (
    <Spinner
      size={number('Size', 7)}
      color={color('Color', '#000000')}
    />
  ))
