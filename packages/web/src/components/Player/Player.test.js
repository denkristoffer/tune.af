/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Player clientId="APIkey" resolveUrl="https://soundcloud.com" />,
    div
  );
});
