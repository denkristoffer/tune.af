/* @flow */

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { boolean } from '@kadira/storybook-addon-knobs'
import PlayButton from './index'

storiesOf('PlayButton', module)
  .add('Default', () => (
    <PlayButton
      playing={boolean('Playing', true)}
      handleClick={action('clicked')}
    />
  ));
