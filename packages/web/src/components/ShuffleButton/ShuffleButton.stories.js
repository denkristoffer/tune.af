/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';
import ShuffleButton from './index';

storiesOf('ShuffleButton', module).add('Default', () => (
  <ShuffleButton
    active={boolean('Shuffling', false)}
    handleClick={action('clicked')}
  />
));
