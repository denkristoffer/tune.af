/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import Link from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link to="/" />, div);
});
