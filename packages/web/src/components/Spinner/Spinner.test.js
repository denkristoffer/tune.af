/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner size={3} />, div);
});
