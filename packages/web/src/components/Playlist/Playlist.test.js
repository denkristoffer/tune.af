/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Playlist
      playlist={[{ id: 1, artist: { username: 'John' } }]}
      playing={true}
      coverUrl="string"
      activeIndex={0}
    />,
    div
  );
});
