/* @flow */

import { configure, addDecorator } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'

const req = require.context('../src/components', true, /.stories.js$/)

addDecorator(withKnobs)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
