/* @flow */

import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Track from '../Track';

const List = styled.FlatList``;

class Playlist extends Component {
  props: {
    playlist?: Array<Object> | Object,
    activeIndex?: ?number,
    coverUrl?: ?string,
    playing: boolean,
  };

  render() {
    return (
      <List
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) => <Track active={true} />}
      />
    );
  }
}

export default Playlist;
