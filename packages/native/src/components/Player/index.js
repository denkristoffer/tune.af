/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components/native';
import Playlist from '../Playlist';
import Cover from '../Cover';
import ShuffleButton from '../ShuffleButton';
import PlayButton from '../PlayButton';

const Container = styled.View`
  flex: 1;
`;

class Player extends Component {
  state: {
    playlist?: Object,
    activeIndex: ?number,
    coverUrl?: string,
    playing: boolean,
    shuffle: boolean,
  };

  constructor() {
    super();

    this.state = {
      activeIndex: null,
      playing: true,
      shuffling: false,
      coverUrl: 'https://i1.sndcdn.com/artworks-000164722618-y1w8zo-large.jpg',
    };
  }

  render() {
    const { playlist, activeIndex, shuffling, coverUrl, playing } = this.state;

    return (
      <Container>
        <Playlist playlist={playlist} playing={playing} />

        <ShuffleButton
          shuffling={shuffling}
          onPress={() => {
            console.log('asd');
          }}
        />
        <PlayButton
          playing={playing}
          onPress={() => {
            console.log('asd');
          }}
        />

        <Cover coverUrl={coverUrl} />
      </Container>
    );
  }
}

export default Player;
