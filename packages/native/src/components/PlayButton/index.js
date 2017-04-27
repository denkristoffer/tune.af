/* @flow */

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background: ${props => props.playing ? '#fff' : '#000'};
  position: absolute;
  bottom: 10;
  right: 10;
  width: 60;
  height: 60;
`;

class PlayButton extends PureComponent {
  props: {
    onPress: Function,
    playing: boolean,
  };

  render() {
    const { onPress, playing } = this.props;

    return (
      <Button onPress={onPress}>
        <Text>as</Text>
      </Button>
    );
  }
}

export default PlayButton;
