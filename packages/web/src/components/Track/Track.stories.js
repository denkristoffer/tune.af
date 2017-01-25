/* @flow */

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { number, text, object, boolean } from '@kadira/storybook-addon-knobs'
import Track from './index'

storiesOf('Track', module)
  .add('Default', () => (
    <Track
      playing={boolean('Playing', false)}
      artist={object('Artist', {username: 'John Doe'})}
      title={text('Title', 'Lorem Ipsum')}
      duration={number('Duration', 8600)}
      permalink={action('clicked')}
      id={number('Id', 1)}
    />
  ));
